import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import MapWrapper from "./Map";

const MapContainer = () => {
  const { loading, error, data } = useQuery(gql`
    {
      location {
        timestamp
        iss_position {
          latitude
          longitude
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { latitude, longitude } = data.location.iss_position;

  return <MapWrapper latitude={latitude} longitude={longitude} />;
};

export default MapContainer;
