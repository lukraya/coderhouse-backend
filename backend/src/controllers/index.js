const { notificationService, productService, cartService } = require('../services')
const authController = require('./authController')
const productController = require('./productController')
const cartController = require('./cartController')

module.exports = {
    authController: authController(notificationService),
    productController: productController(productService),
    cartController: cartController(cartService),
}