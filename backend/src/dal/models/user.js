const { Schema, model } = require('mongoose')
const cartSchema = require('./cart')
const messageSchema = require('./message')

const userSchema = new Schema({
    name: String,
    address: String,
    age: Number,
    cellphone: String,
    avatar: String,
    email: String,
    cart: [cartSchema],
    chat: [messageSchema], //ACÁ REFERENCIA AL DOC EN COLECCION CHATS CUYO USER COINCIDA CON EL EMAIL DE ESTE DOC
    hash: String,
    salt: String
}, {collection: 'usuarios'})

module.exports = model('User', userSchema)