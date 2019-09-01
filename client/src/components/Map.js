import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MapPosition = ({ latitude, longitude }) => {
  //   use useState to keep address in state

  const position = [latitude, longitude];
  return (
    <Map center={position} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};

export default MapPosition;
