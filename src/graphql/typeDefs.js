const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type List {
    id: ID!
    nombre: String!
    descripcion: String
    fecha_creacion: String
  }

  type Query {
    getLists: [List]
    getList(id: ID!): List
  }

  type Mutation {
    updateList(id: ID!, nombre: String, descripcion: String): List
  }
`;

module.exports = typeDefs;
