import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Image, Grid } from "semantic-ui-react";
import Location from "./components/Location";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Grid>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/ISS_insignia.svg/160px-ISS_insignia.svg.png"
          as="a"
          size="medium"
          href="https://www.nasa.gov/mission_pages/station/main/index.html"
          target="_blank"
          centered={true}
        />
      </Grid>
      <Location />
    </ApolloProvider>
  );
}

export default App;
