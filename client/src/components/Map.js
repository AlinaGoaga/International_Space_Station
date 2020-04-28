import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const MapWrapper = ({ latitude, longitude }) => {
  //   use useState to keep address in state

  const position = [latitude, longitude];

  console.log(position);

  return (
    <Map
      center={position}
      zoom={10}
      style={{
        height: "700px",
        width: "700px"
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>This is the current location.</Popup>
      </Marker>
    </Map>
  );
};

export default MapWrapper;
