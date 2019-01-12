import React from "react";
import { RadioConsumer } from "../../RadioContext";

// components
import MapComponent from "./MapComponent";

export default function MapContainer() {
  return (
    <RadioConsumer>
      {({ center, zoom, apiHasLoaded }) => {
        return (
          <MapComponent
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3&key=${
              process.env.REACT_APP_MAP_KEY
            }`}
            loadingElement={<div />}
            containerElement={
              <div style={{ height: "100vh", width: "100vw" }} />
            }
            mapElement={<div style={{ height: "100vh", width: "100vw" }} />}
            zoom={zoom}
            center={center}
            onTilesLoaded={() => apiHasLoaded()}
          />
        );
      }}
    </RadioConsumer>
  );
}
