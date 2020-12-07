const {ApolloServer} = require('apollo-server-lambda');
import {schema} from './schema';
import {resolvers} from './resolvers/index';

const server = new ApolloServer({typeDefs:schema, resolvers:resolvers});

exports.graphqlHandler = server.createHandler();