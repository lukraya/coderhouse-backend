const authRoutes = require('./authRoutes')
const apiRoutes = require('./apiRoutes')
const productRoutes = require('./productRoutes')
const cartRoutes = require('./cartRoutes')
const { authController, productController, cartController } = require('../controllers')

const router = require('express').Router()

router.use('/auth', authRoutes(authController))
router.use('/api/productos', apiRoutes(productController))
router.use('/productos', productRoutes(productController))
router.use('/carrito', cartRoutes(cartController))

module.exports = router