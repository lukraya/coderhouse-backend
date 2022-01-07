const { Schema } = require('mongoose')

const messageSchema = new Schema({
    date: String, //FyH
    text: String, //cuerpo del mensaje
    type: String, //usuario o sistema
    sender: String, //email o admin
    recipient: String //email
})

module.exports = messageSchema