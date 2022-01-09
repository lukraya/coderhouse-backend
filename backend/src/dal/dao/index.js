const { productModel, userModel, orderModel } = require('../models')
const productDao = require('./productDao')
const cartDao = require('./cartDao')
const userDao = require('./userDao')
const chatDao = require('./chatDao')
const orderDao = require('./orderDao')

module.exports = {
    productDao: productDao(productModel),
    cartDao: cartDao(userModel),
    userDao: userDao(userModel),
    chatDao: chatDao(userModel),
    orderDao: orderDao(orderModel)
}