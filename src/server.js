require("dotenv").config();
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");
const sequelize = require("./config/database");

const app = express();

// Configurar Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  // Sincronizar base de datos y levantar servidor
  sequelize.sync()
    .then(() => {
      app.listen({ port: process.env.PORT || 5005 }, () => {
        console.log(`🚀 Servidor GraphQL corriendo en http://localhost:5005${server.graphqlPath}`);
      });
    })
    .catch(err => console.error("❌ Error al sincronizar la base de datos:", err));
}

startServer();
