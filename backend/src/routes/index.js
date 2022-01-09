const authRoutes = require('./authRoutes')
const apiRoutes = require('./apiRoutes')
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const chatRoutes = require('./chatRoutes')
const orderRoutes = require('./orderRoutes')
const { authController, productController, cartController, chatController, 
    orderController  } = require('../controllers')

const router = require('express').Router()

router.use('/auth', authRoutes(authController))
router.use('/api/productos', apiRoutes(productController))
router.use('/productos', productRoutes(productController))
router.use('/carrito', cartRoutes(cartController))
router.use('/chat', chatRoutes(chatController))
router.use('/orden', orderRoutes(orderController))

module.exports = router