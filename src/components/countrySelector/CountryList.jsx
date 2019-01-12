import React from "react";

// context
import { RadioConsumer } from "../../RadioContext";

// components
import CountryListItem from "./CountryListItem";

export default function CountryList(props) {
  return (
    props.focus && (
      <RadioConsumer>
        {({ searchResult, changeCountry }) => (
          <ul className="country-list">
            {searchResult.map(country => (
              <CountryListItem
                key={country.country_code}
                country={country}
                changeCountry={changeCountry}
              />
            ))}
          </ul>
        )}
      </RadioConsumer>
    )
  );
}
