const { readFileSync } = require('fs')
const { resolve } = require('path')
const { createWord, words, updateWord, deleteWord } = require('./resolvers')

const schema = readFileSync(resolve(__dirname, 'schema.gql'), {
  encoding: 'utf-8',
})

const resolvers = {
  Query: {
    words,
  },
  Mutation: {
    createWord,
    updateWord,
    deleteWord,
  },
}

module.exports = {
  resolvers,
  schema,
}
