const { Schema, model } = require('mongoose')
const cartSchema = require('./cart')

const userSchema = new Schema({
    name: String,
    address: String,
    age: Number,
    cellphone: String,
    avatar: String,
    email: String,
    cart: [cartSchema],
    hash: String,
    salt: String
}, {collection: 'usuarios'})

module.exports = model('User', userSchema)