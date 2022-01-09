const { Schema, model } = require('mongoose')
const cartSchema = require('./cart')
const buyerSchema = require('./buyer')

const orderSchema = new Schema({
    items: [cartSchema],
    total: Number,
    orderNumber: Number,
    date: String,
    state: {type: String, default: 'generada'},
    from: buyerSchema
}, {collection: 'ordenes'})

module.exports = model('Order', orderSchema)