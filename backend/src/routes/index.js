const authRoutes = require('./authRoutes')
const apiRoutes = require('./apiRoutes')
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const chatRoutes = require('./chatRoutes')
const { authController, productController, cartController, chatController } = require('../controllers')

const router = require('express').Router()

router.use('/auth', authRoutes(authController))
router.use('/api/productos', apiRoutes(productController))
router.use('/productos', productRoutes(productController))
router.use('/carrito', cartRoutes(cartController))
router.use('/chat', chatRoutes(chatController))

module.exports = router