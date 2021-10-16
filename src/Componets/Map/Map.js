import React from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  direcrtion,
} from "@react-google-maps/api";
import Direction from "./Direction";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 37.772,
  lng: -122.214,
};

function Map() {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  return (
    <div>
      <Direction></Direction>
    </div>
  );
}

export default Map;
