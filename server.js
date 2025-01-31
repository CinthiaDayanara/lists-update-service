require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./src/graphql/typeDefs");
const resolvers = require("./src/graphql/resolvers");
const sequelize = require("./src/config/database");

const server = new ApolloServer({ typeDefs, resolvers });

sequelize.sync()
  .then(() => {
    console.log("📦 Base de datos sincronizada");
    return server.listen({ port: process.env.PORT || 5005 });
  })
  .then(({ url }) => {
    console.log(`🚀 Lists Update Service corriendo en ${url}`);
  })
  .catch(error => console.error("❌ Error al sincronizar la base de datos:", error));
