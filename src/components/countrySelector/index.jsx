import React, { PureComponent } from "react";
import { RadioConsumer } from "../../RadioContext";

// style
import "./style.scss";
import CountryList from "./CountryList";

export default class CountrySelecotr extends PureComponent {
  state = {
    focus: false,
  };

  showSuggestList = () => {
    this.setState({
      focus: !this.state.focus,
    });
  };

  handleSubmit = (e, address, callback) => {
    e.preventDefault();
    callback(address);
  };

  render() {
    return (
      <RadioConsumer>
        {({ country, filterCountry, apiReady, changeCountry }) =>
          apiReady && (
            <div className="country-selector">
              <form
                onSubmit={e => this.handleSubmit(e, country, changeCountry)}
              >
                <input
                  type="text"
                  value={country}
                  placeholder="Travel to..."
                  onFocus={() => this.showSuggestList()}
                  onBlur={() => this.showSuggestList()}
                  onChange={e => filterCountry(e.target.value)}
                  autoComplete="off"
                />
                {!this.state.focus && !country && (
                  <span className="indicator" />
                )}
              </form>
              <CountryList focus={this.state.focus} />
            </div>
          )
        }
      </RadioConsumer>
    );
  }
}
