const { default: mockingoose } = require('mockingoose')
const { gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')
const server = require('../../src/server')
const Word = require('../../src/model/word')

const content = [
  {
    id: '76asfyiu3',
    english: 'Hi',
    original: 'Hej',
  },
  {
    id: 'gjk54k5y7v',
    english: 'New',
    original: 'Nowy',
  },
]

it('createWord mutation works', async () => {
  const { query } = createTestClient(server)
  mockingoose(Word).toReturn(content)

  const createWordQuery = gql`
    {
      words {
        id
      }
    }
  `

  const resp = await query({ query: createWordQuery })
  expect(resp.data.words.length).toBe(2)
})
