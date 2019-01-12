import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs } from "react-google-maps";

// map style
import customStyle from "../../mapStyle.json";

const MapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultCenter={{ lat: 0, lng: 0 }}
      defaultZoom={0}
      defaultOptions={{
        styles: customStyle,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      }}
      {...props}
    />
  ))
);

export default MapComponent;
