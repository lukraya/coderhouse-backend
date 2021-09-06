const cartController = require('../controller/cart')
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
    .post('/agregar', getTimestamp, cartController.createItem) //ItemCounter-CartContext
    .get('/', cartController.getAllItems) //NavBar-CartContext
    .patch('/actualizar/:cartId', /* setHeaders, */ cartController.updateItem) //CartItem -- CORS ERROR-POSTMAN OK
    .delete('/borrar/:cartId', cartController.deleteItem) //CartItem

    return router
}