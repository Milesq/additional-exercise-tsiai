const Word = require('../model/Word')

async function createWord(parent, { input: { original, english } }) {
  const createdWord = await new Word({
    original,
    english,
  }).save()

  createdWord.id = createWord._id

  return createdWord
}

function words(parent, { id, limit }) {
  async function _internalWords(id) {
    if (id) {
      const doc = await Word.findById(id)

      return doc ? [doc] : null
    } else {
      return Word.find()
    }
  }

  return _internalWords(id)
    .then(words => words.slice(0, limit))
    .catch(() => null)
}

async function updateWord(parent, { id, input }) {
  const updatedDoc = await Word.findByIdAndUpdate(id, input)
  updatedDoc.id = updatedDoc._id

  return updatedDoc
}

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
