const { Schema } = require('mongoose')

const messageSchema = new Schema({
    date: String, //FyH
    text: String, //cuerpo del mensaje
    type: String, //usuario o sistema
    sender: String, //email
    from: String //email
})

module.exports = messageSchema