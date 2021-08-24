const productos = require('./Productos')
const dayjs = require('dayjs')

let admin = true

function checkAdmin(req, res, next) {
    if(admin) {
        next()
    } else {
        res.send({error: "Acción no autorizada para el usuario"})
    }
}

function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

module.exports = (router)=>{
    router.get('/listar/:id?', (req, res)=>{
        if (req.params.id) {
            let id = req.params.id
            res.send(productos.mostrarProd(id))
        } else {
            res.send(productos.listarProductos)
        }
    })

    router.post('/agregar', checkAdmin, getTimestamp, (req, res)=>{
        let toAdd = req.body;
        res.send({msj: "Producto agregado", producto: productos.nuevoProd(toAdd)})
    })

    router.put('/actualizar/:id', checkAdmin, getTimestamp, (req, res)=>{
        let toChange = req.body;
        let id = req.params.id;
        res.send({msj: "Producto actualizado", producto: productos.actualizarProducto(toChange, id)})
    })

    router.delete('/borrar/:id', checkAdmin, (req, res)=>{
        let id = req.params.id;
        res.send({msj: "Producto eliminado", producto: productos.eliminarProd(id)})
    })

    return router
}