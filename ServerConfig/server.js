const { ApolloServer } = require('apollo-server');
var typeDefs = require ('./typeDefs');
var resolvers = require('./resolvers');
var mysqlDS = require('../DataSources/mysqlDataSource');
const { InMemoryLRUCache } = require("apollo-server-caching");


const server =new ApolloServer(
    {
        typeDefs,
        resolvers,
        tracing:true,
        cache: new InMemoryLRUCache(),
        dataSources: ()=>({
            mysqlDS: new mysqlDS()
             }),
        context:{
            
        }
    }
);

module.exports= server;