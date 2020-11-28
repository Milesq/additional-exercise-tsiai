const { gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')
const server = require('../../src/server')
const Word = require('../../src/model/word')

it('createWord mutation works', async () => {
  const { mutate } = createTestClient(server)
  Word.prototype.save = jest.fn()

  const createWordQuery = gql`
    mutation($word: CreateWordInput!) {
      createWord(input: $word) {
        id
      }
    }
  `

  await mutate({
    query: createWordQuery,
    variables: {
      word: {
        original: 'Jeść',
        english: 'Eat',
      },
    },
  })

  expect(Word.prototype.save).toBeCalled()
})
