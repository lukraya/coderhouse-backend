const { addItem, getAllItems, updateItem, deleteItem } = require('../controller/cart')
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.item.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}
function setHeaders(req, res, next) {    
    res.headers('Access-Control-Allow-Origin', /* '*' */'http://localhost:3000')
    console.log(res.headers)
    next()
}

module.exports = (router)=>{
    router
    .patch('/agregar/:userId', /* setHeaders, */ getTimestamp, addItem) //ItemCounter-CartContext
    .get('/listar', getAllItems) //NavBar-CartContext
    
    
    .patch('/actualizar/:cartId', /* setHeaders, */ updateItem) //CartItem -- CORS ERROR-POSTMAN OK
    .delete('/borrar/:cartId', deleteItem) //CartItem

    return router
}