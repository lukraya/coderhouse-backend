const { productModel, userModel } = require('../models')
const productDao = require('./productDao')
const cartDao = require('./cartDao')
const userDao = require('./userDao')

module.exports = {
    productDao: productDao(productModel),
    cartDao: cartDao(userModel),
    userDao: userDao(userModel),
}