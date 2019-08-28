const mongoose = require('mongoose')
const QAModel = require('./QAModel').schema
const Schema = mongoose.Schema
const SessionSchema = new Schema({
   
    listOfQA: [QAModel],
    userId: {
        type: Number,
        required: true
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    }
})

const Session= mongoose.model('session', SessionSchema)
module.exports = Session