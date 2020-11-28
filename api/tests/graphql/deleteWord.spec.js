const { gql } = require('apollo-server')
const { default: mockingoose } = require('mockingoose')
const { createTestClient } = require('apollo-server-testing')
const server = require('../../src/server')
const Word = require('../../src/model/word')

describe('createWord mutation', () => {
  beforeEach(() => {
    mockingoose.resetAll()
  })

  it('works', async () => {
    mockingoose(Word).toReturn({}, 'findOne')
    const { mutate } = createTestClient(server)
    Word.prototype.remove = jest.fn()

    const deleteWordQuery = gql`
      mutation($ID: ID!) {
        deleteWord(id: $ID)
      }
    `

    const resp = await mutate({
      query: deleteWordQuery,
      variables: {
        ID: 'abc',
      },
    })

    expect(Word.prototype.remove).toBeCalled()
    expect(resp.data.deleteWord).toBeTruthy()
  })

  it("fails when object doesn't exists", async () => {
    const { mutate } = createTestClient(server)
    Word.prototype.remove = jest.fn()

    const deleteWordQuery = gql`
      mutation($ID: ID!) {
        deleteWord(id: $ID)
      }
    `

    const resp = await mutate({
      query: deleteWordQuery,
      variables: {
        ID: 'abc',
      },
    })

    expect(Word.prototype.remove).not.toBeCalled()
    expect(resp.data.deleteWord).toBeFalsy()
  })
})
