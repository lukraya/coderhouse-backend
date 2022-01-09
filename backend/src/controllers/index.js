const { notificationService, productService, cartService, chatService, orderService } = require('../services')
const authController = require('./authController')
const productController = require('./productController')
const cartController = require('./cartController')
const chatController = require('./chatController')
const orderController = require('./orderController')

module.exports = {
    authController: authController(notificationService),
    productController: productController(productService),
    cartController: cartController(cartService),
    chatController: chatController(chatService),
    orderController: orderController({orderService, notificationService})
}