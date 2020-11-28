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

async function deleteWord(parent, { id }) {
  const word = await Word.findById(id)

  try {
    await word.remove()
  } catch {
    return false
  }

  return true
}

module.exports = {
  createWord,
  words,
  updateWord,
  deleteWord,
}
