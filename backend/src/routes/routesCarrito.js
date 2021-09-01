const carrito = require('./Carrito')
const productos = require('./Productos')
const dayjs = require('dayjs')

function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

module.exports = (router)=>{
    router.get('/listar/:id?', (req, res)=>{
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
    })

    return router
}