const { gql } = require('apollo-server')

const schema = gql`
  schema {
    query: Query
  }

  type Query {
    hello: Int
  }
`

const resolvers = {
  Query: {
    hello: () => 2
  },
}

module.exports = {
  resolvers,
  schema,
}
