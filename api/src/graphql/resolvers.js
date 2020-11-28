const Word = require('../model/Word')

async function createWord(parent, { input: { original, english } }) {
  const createdWord = await new Word({
    original,
    english,
  }).save()

  createdWord.id = createWord._id

  return createdWord
}

function words() {
  return Word.find()
}

function updateWord() {}

function deleteWord() {}

module.exports = {
  createWord,
  words,
  updateWord,
  deleteWord,
}
