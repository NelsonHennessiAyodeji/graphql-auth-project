// module for node environment access
require('dotenv').config();
const { ApolloServer } = require('apollo-server');

//database connection module
const db = require('./database/db');

// graphQL mains
const typeDefs = require('./graphQL/typeDefs');
const resolvers = require('./graphql/resolver');

// feeding the server with type definitions and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// This point of this function is to stop the application from running,
// if ever the database is down...
// this is just how it should be in my perspective
const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    const { url } = await server.listen({ port: 3000 });
    console.log(`Server running at ${url}`);
  } catch (error) {
    throw new Error(error.message);
  }
};

start();
