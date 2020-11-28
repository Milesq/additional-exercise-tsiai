const { default: mockingoose } = require('mockingoose')
const { gql } = require('apollo-server')
const { mockRandom, resetMockRandom } = require('jest-mock-random')
const { createTestClient } = require('apollo-server-testing')
const server = require('../../src/server')
const Word = require('../../src/model/word')

const content = [
  {
    _id: '76asfyiu3',
    id: '76asfyiu3',
    english: 'Hi',
    original: 'Hej',
  },
  {
    _id: 'gjk54k5y7v',
    id: 'gjk54k5y7v',
    english: 'New',
    original: 'Nowy',
  },
]

describe('listing words', () => {
  let query

  beforeEach(() => {
    query = createTestClient(server).query
    mockingoose(Word).toReturn(content)
  })

  afterEach(() => {
    mockingoose.resetAll()
  })

  it('works', async () => {
    const getWordsQuery = gql`
      {
        words {
          id
        }
      }
    `

    const resp = await query({ query: getWordsQuery })
    expect(resp.data.words.length).toBe(2)
  })

  it('returns specific result', async () => {
    const getWordsQuery = gql`
      query($ID: ID!) {
        words(id: $ID) {
          english
        }
      }
    `
    const idxDocToShow = 1
    const docToShow = content[idxDocToShow]

    mockRandom(0)
    mockingoose(Word).toReturn(docToShow, 'findOne')

    const resp = await query({
      query: getWordsQuery,
      variables: { ID: docToShow.id },
    })

    expect(resp.data.words.length).toBe(1)
    expect(resp.data.words[0].english).toBe(docToShow.english)

    resetMockRandom()
  })

  it('returns null when not found by id', async () => {
    const getWordsQuery = gql`
      query($ID: ID!) {
        words(id: $ID) {
          english
        }
      }
    `

    mockingoose(Word).toReturn(null, 'findOne')

    const resp = await query({
      query: getWordsQuery,
      variables: { ID: 'abc' },
    })

    expect(resp.data.words).toBeNull()
    expect(resp.errors).toBeUndefined()
  })
})
