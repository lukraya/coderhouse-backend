const {Schema, model} = require('mongoose')

const productSchema = new Schema({
    name: String,
    price: Number,
    thumbnail: String,
    stock: Number,
    description: String,
    code: String,
    category: String,
    timestamp: String
}, {collection: 'productos'})

module.exports = model('Product', productSchema)