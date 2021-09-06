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

    /* router.get('/listar/:id?', (req, res)=>{
        if (req.params.id) {
            let id = req.params.id
            res.send(carrito.mostrarProd(id))
        } else {
            res.send(carrito.listarProductos)
        }
    })

    router.post('/agregar/:id_producto', getTimestamp, (req, res)=>{
        let id = req.params.id_producto
        let toAdd = productos.mostrarProd(id)
        let timestamp = req.body.timestamp
        res.send({msj: "Producto agregado", producto: carrito.nuevoProd(toAdd, timestamp)})
    })

    router.delete('/borrar/:id', (req, res)=>{
        let id = req.params.id;
        res.send({msj: "Producto eliminado", producto: carrito.eliminarProd(id)})
    }) */

    return router
}