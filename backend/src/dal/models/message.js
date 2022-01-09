const { Schema } = require('mongoose')

const messageSchema = new Schema({
    date: String,
    text: String,
    type: String,
    sender: String,
    recipient: String
})

module.exports = messageSchema