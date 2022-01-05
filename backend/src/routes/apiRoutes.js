const router = require('express').Router()
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

const apiRoutes = (controller) => {
    router
    .post('/agregar', getTimestamp, controller.createProduct)
    .post('/actualizar/:productId', controller.updateProduct)
    .delete('/borrar/:productId', controller.deleteProduct)

    return router
}

module.exports = apiRoutes