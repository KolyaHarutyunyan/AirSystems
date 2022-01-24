import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
   width: "100%",
   height: "100%",
};

export const Maps = ({ google }) => {
   return (
      <Map
         google={google}
         zoom={8}
         style={mapStyles}
         initialCenter={{ lat: 9.761927, lng: 79.95244 }}
      >
         <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
   );
};

export default GoogleApiWrapper({
   // apiKey: "API_KEY",
})(Maps);
