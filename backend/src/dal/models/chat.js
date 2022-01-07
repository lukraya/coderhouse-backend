const { Schema, model } = require('mongoose')
const messageSchema = require('./message')

const chatSchema = new Schema({
    user: String, //email
    messages: [messageSchema], //array de subdocs
}, {collection: 'chats'})

module.exports = model('Chat', chatSchema)