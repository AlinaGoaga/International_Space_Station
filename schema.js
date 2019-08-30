const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLSchema
} = require("graphql");
const axios = require("axios");

//Location Type
const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    timestamp: { type: GraphQLInt },
    iss_position: { type: CoordsType }
  })
});

const CoordsType = new GraphQLObjectType({
  name: "Coords",
  fields: () => ({
    latitude: { type: GraphQLFloat },
    longitude: { type: GraphQLFloat }
  })
});

//Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    location: {
      type: LocationType,
      resolve(parent, args) {
        return axios
          .get("http://api.open-notify.org/iss-now.json")
          .then(res => res.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
