const { Schema, model } = require('mongoose')
const cartSchema = require('./cart')
const messageSchema = require('./message')

const userSchema = new Schema({
    name: String,
    address: String,
    age: Number,
    cellphone: String,
    avatar: String,
    email: {type: String, unique: true},
    cart: [cartSchema],
    chat: [messageSchema],
    hash: String,
    salt: String
}, {collection: 'usuarios'})

module.exports = model('User', userSchema)