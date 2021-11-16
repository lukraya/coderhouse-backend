const { addItem, getAllItems, updateItem, deleteItem, deleteAll } = require('../controller/cart')
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.prod.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}
function setHeaders(req, res, next) {    
    res.headers('Access-Control-Allow-Origin', 'http://localhost:3000')
    console.log(res.headers)
    next()
}

module.exports = (router)=>{
    router
    .post('/agregar', getTimestamp, addItem)
    .patch('/borrar', deleteAll)
    .get('/listar', getAllItems) //NavBar-CartContext
    .delete('/borrar/:cartId', deleteItem) //CartItem
    //.patch('/agregar/:userId', /* setHeaders, */ getTimestamp, addItem) //ItemCounter-CartContext    
    //.patch('/actualizar/:cartId', /* setHeaders, */ updateItem) //CartItem -- CORS ERROR-POSTMAN OK
    

    return router
}