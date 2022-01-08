const { productDao, cartDao, chatDao } = require('../dal/dao')
const productService = require('./productService')
const cartService = require('./cartService')
const chatService = require('./chatService')
const notificationService = require('./notificationService')

module.exports = {
    productService: productService(productDao),
    cartService: cartService(cartDao),
    chatService: chatService(chatDao),  
    notificationService: notificationService()
}