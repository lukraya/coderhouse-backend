const { productDao, cartDao } = require('../dal/dao')
const productService = require('./productService')
const cartService = require('./cartService')
const notificationService = require('./notificationService')

module.exports = {
    productService: productService(productDao),
    cartService: cartService(cartDao),
    notificationService: notificationService()
}