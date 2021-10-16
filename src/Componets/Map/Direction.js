import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  direcrtion,
} from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

function Direction() {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyAmfgJ4cUkP46ulPwSlbnLZ0hcmbBYxexk">
      <GoogleMap
        id="marker-example"
        mapContainerStyle={containerStyle}
        zoom={10}
        center={center}
      >
        <Marker onLoad={onLoad} position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Direction;
