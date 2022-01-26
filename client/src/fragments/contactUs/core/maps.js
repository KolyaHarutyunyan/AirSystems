import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import {mapUi} from "./styles";

const mapStyles = {
   width: "100%",
   height: "100%",

};


export const Maps = ({ google }) => {


  const mapLoaded = (mapProps, map)  => {
      map.setOptions({
         styles: mapUi,
      });
   }


   return (
      <Map
          onReady={(mapProps, map) => mapLoaded(mapProps, map)}
         google={google}
         zoom={8}

         style={mapStyles}
         initialCenter={{ lat: 9.761927, lng: 79.95244 }}

          zoomControl={true}
          fullscreenControl={false}
          mapTypeControl={false}
          streetViewControl={false}
          disableDefaultUI={false}
          scaleControl={false}
          rotateControl={false}

      >
         <Marker position={{ lat: 9.761927, lng: 79.95244 }} />
      </Map>
   );
};

export default GoogleApiWrapper({
   apiKey: 'AIzaSyCWYz3vb8vWqc4-NllBUJKYIUOWmRMQ9W0',
})(Maps);
