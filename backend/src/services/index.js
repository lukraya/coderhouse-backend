const { productDao, cartDao, chatDao, orderDao } = require('../dal/dao')
const productService = require('./productService')
const cartService = require('./cartService')
const chatService = require('./chatService')
const orderService = require('./orderService')
const notificationService = require('./notificationService')

module.exports = {
    productService: productService(productDao),
    cartService: cartService(cartDao),
    chatService: chatService(chatDao),
    orderService: orderService(orderDao),
    notificationService: notificationService()
}