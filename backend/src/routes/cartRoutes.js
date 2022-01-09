const router = require('express').Router()
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.prod.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

const cartRoutes = (controller) => {
    router
    .post('/agregar', getTimestamp, controller.addItem)
    .get('/listar', controller.getAllItems)
    .patch('/actualizar/:cartId', controller.updateItem)
    .delete('/borrar/:cartId', controller.deleteItem)
    .patch('/borrar', controller.deleteAll)
    
    return router
}

module.exports = cartRoutes