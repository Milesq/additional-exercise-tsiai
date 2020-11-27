const { ApolloServer } = require('apollo-server')
const { schema, resolvers } = require('./graphql')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
})

module.exports = server
