const { addItem, getAllItems, updateItem, deleteItem, deleteAll, createOrder } = require('../controller/cart')
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.prod.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}


module.exports = (router)=>{
    router
    .post('/agregar', getTimestamp, addItem)
    .patch('/borrar', deleteAll)
    .get('/listar', getAllItems)
    .post('/orden', createOrder)
    .delete('/borrar/:cartId', deleteItem)
    .patch('/actualizar/:cartId', updateItem)
    
    return router
}