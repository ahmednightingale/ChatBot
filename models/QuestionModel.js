const mongoose = require('mongoose')
const Schema = mongoose.Schema
const QuestionSchema = new Schema({
  
    userID: {
        type: Number
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String
    }
})

const Question= mongoose.model('questions', QuestionSchema)
module.exports = Question