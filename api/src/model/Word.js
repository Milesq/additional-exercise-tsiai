const { Schema, model } = require('mongoose')

const Word = new Schema({
  original: String,
  english: String,
})

module.exports = model('word', Word)
