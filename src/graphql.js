const {ApolloServer, gql} = require ('apollo-server-lambda');
import {schema} from './schema'

const typeDefs = gql``;

const resolvers = {};

const server = new ApolloServer({typeDefs:schema, resolvers});

exports.graphqlHandler = server.createHandler();