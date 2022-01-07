const { notificationService, productService, cartService, chatService } = require('../services')
const authController = require('./authController')
const productController = require('./productController')
const cartController = require('./cartController')
const chatController = require('./chatController')

module.exports = {
    authController: authController(notificationService),
    productController: productController(productService),
    cartController: cartController(cartService),
    chatController: chatController(chatService)
}