import React from "react";

// context
import { RadioConsumer } from "../../RadioContext";

export default function CountryListItem({ country, changeCountry }) {
  return (
    <RadioConsumer>
      {() => (
        <li onMouseDown={() => changeCountry(country.name)}>
          {country.name}&nbsp;({country.country_code})
        </li>
      )}
    </RadioConsumer>
  );
}
