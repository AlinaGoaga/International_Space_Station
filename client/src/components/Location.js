import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import MapPosition from "./Map";

export default Location = () => {
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

  return <MapPosition latitude={latitude} longitude={longitude} />;
};
