const router = require('express').Router()

const orderRoutes = (controller) => {
    router
    .post('/', controller.createOrder)

    return router
}
    
module.exports = orderRoutes