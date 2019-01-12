import React, { PureComponent, createContext } from "react";
import Axios from "axios";

// temparary import countries json file to save request times
import countries from "./countries.json";

const RadioContext = createContext();

export class RadioProvider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      greetings: "hello",
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 8,
      country: "",
      countries,
      searchResult: countries,
      apiReady: false,
      searchCountry: country => this.searchCountry(country),
      filterCountry: searchTerm => this.filterCountry(searchTerm),
      apiHasLoaded: () => this.apiHasLoaded(),
      changeCountry: address => this.changeCountry(address),
    };

    this.apiHasLoaded = () => {
      this.setState({
        apiReady: true,
        geocoder: window.google.maps.Geocoder(),
      });
    };

    this.getInitialCenter = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          this.setState({
            center: {
              lat: coords.latitude,
              lng: coords.longitude,
            },
          });
        });
      }
    };

    this.getCountries = () => {
      Axios.get(
        `${process.env.REACT_APP_DIRBLE_ROOT}countries?token=${
          process.env.REACT_APP_DIRBLE_KEY
        }`
      )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };

    this.filterCountry = searchTerm => {
      let filtered = searchTerm.toLowerCase();
      this.setState({
        country: searchTerm,
        searchResult: this.state.countries.filter(country => {
          return country.name.toLowerCase().indexOf(filtered) > -1;
        }),
      });
    };

    this.searchCountry = country => {
      this.setState({
        country,
      });
    };

    this.changeCountry = address => {
      // access google maps obj
      const geocoder = new window.google.maps.Geocoder();
      // using geocode service
      geocoder.geocode({ address }, (result, status) => {
        let lat = result[0].geometry.location.lat();
        let lng = result[0].geometry.location.lng();
        this.setState({
          center: {
            lat,
            lng,
          },
          country: address,
        });
      });
    };
  }

  componentDidMount() {
    this.getInitialCenter();
    // temparory comment out to save request times.
    // this.getCountries();
  }

  render() {
    return (
      <RadioContext.Provider value={this.state}>
        {this.props.children}
      </RadioContext.Provider>
    );
  }
}

export const RadioConsumer = RadioContext.Consumer;
