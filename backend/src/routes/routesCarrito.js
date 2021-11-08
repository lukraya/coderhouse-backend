const { createItem, getAllItems, updateItem, deleteItem } = require('../controller/cart')
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}
function setHeaders(req, res, next) {    
    res.headers('Access-Control-Allow-Origin', '*')
    next()
}

module.exports = (router)=>{
    router
    .post('/agregar', getTimestamp, createItem) //ItemCounter-CartContext
    .get('/', getAllItems) //NavBar-CartContext
    .patch('/actualizar/:cartId', /* setHeaders, */ updateItem) //CartItem -- CORS ERROR-POSTMAN OK
    .delete('/borrar/:cartId', deleteItem) //CartItem

    return router
}