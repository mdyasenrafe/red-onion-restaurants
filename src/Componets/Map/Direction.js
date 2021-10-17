import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import UseAuth from "../../Hooks/UseAuth";
const containerStyle = {
  width: "100%",
  height: "600px",
};

const location = {
  lat: 23.733348,
  lng: 90.406707,
};

function Direction() {
  const { address } = UseAuth();
  const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCdIAAKYGyxL9CYy7Qrm4zOJpsQkCNxBGI">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={16}>
        {address !== "" && (
          <DirectionsService
            // required
            options={{
              destination: address,
              origin: "Chattogram",
              travelMode: "DRIVING",
            }}
            // required
            callback={(res) => {
              if (res !== null) {
                setDirectionResponse(res);
              }
            }}
          />
        )}
        {directionResponse && (
          <DirectionsRenderer
            // required
            options={{
              directions: directionResponse,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default Direction;
