import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

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
  console.log(data);

  return (
    <p>
      latitude: {data.location.iss_position.latitude}, longitude:
      {data.location.iss_position.longitude}
    </p>
  );
};
