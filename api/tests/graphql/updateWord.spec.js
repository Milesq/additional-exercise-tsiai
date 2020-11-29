const { default: mockingoose } = require('mockingoose')
const { gql } = require('apollo-server')
const { createTestClient } = require('apollo-server-testing')
const server = require('../../src/server')
const Word = require('../../src/model/word')
const pick = require('lodash.pick')

const content = [
  {
    _id: '76asfyiu3',
    english: 'Hi',
    original: 'Hej',
  },
  {
    _id: 'gjk54k5y7v',
    english: 'New',
    original: 'Nowy',
  },
]

describe('updating words', () => {
  let mutate

  beforeEach(() => {
    mutate = createTestClient(server).mutate
    mockingoose(Word).toReturn(content[1], 'findOne')
  })

  afterEach(() => {
    mockingoose.resetAll()
  })

  it('works', async () => {
    Word.prototype.save = jest.fn()

    const getWordsQuery = gql`
      mutation($id: ID!, $input: UpdateWordInput!) {
        updateWord(id: $id, input: $input) {
          english
        }
      }
    `

    const variables = {
      id: content[1]._id,
      input: {
        english: 'The New',
      },
    }

    await mutate({ query: getWordsQuery, variables })
    expect(Word.prototype.save).toBeCalledTimes(1)

    let {
      mock: {
        instances: [updatedObject],
      },
    } = Word.prototype.save

    updatedObject = pick(updatedObject, ['english', 'original'])

    expect(updatedObject).toEqual({
      original: 'Nowy',
      english: 'The New',
    })
  })
})
