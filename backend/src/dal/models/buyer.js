const { Schema } = require('mongoose')

const buyerSchema = new Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
})

module.exports = buyerSchema