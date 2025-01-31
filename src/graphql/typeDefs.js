const { gql } = require("apollo-server");

const typeDefs = gql`
  type List {
    id: ID!
    board_id: Int!
    name: String!
    position: Int!
  }

  type Query {
    getList(id: ID!): List
  }

  type Mutation {
    updateList(id: ID!, name: String, position: Int): List
  }
`;

module.exports = typeDefs;
