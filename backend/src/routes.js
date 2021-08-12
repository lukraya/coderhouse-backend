let productos = require('./Productos')
let carrito = require('./Carrito')

module.exports = {
    productos: (router)=>{
        /* router.get('/', (req, res, next)=>{
            res.json({
                msj: "Esto es productos",
            })
        }) */

        router.get('/listar/:id?', (req, res)=>{
            if (req.params.id) {
                let id = req.params.id
                res.send(productos.mostrarProd(id))
            } else {
                res.send(productos.listarProductos)
            }
        })

        router.post('/agregar', (req, res)=>{
            let toAdd = req.body;
            res.send(productos.nuevoProd(toAdd))
            //res.redirect('/productos/agregar')
        })

        router.put('/actualizar/:id', (req, res)=>{
            let toChange = req.body;
            let id = req.params.id;
            res.send(productos.actualizarProducto(toChange, id))
        })

        router.delete('/borrar/:id', (req, res)=>{
            let id = req.params.id;
            res.send(productos.eliminarProd(id))
        })
    
        return router
    },

    carrito: (router)=>{
        /* router.get('/', (req, res, next)=>{
            res.json({
                msj: "Esto es carrito"
            })
        }) */

        router.get('/listar/:id?', (req, res)=>{
            if (req.params.id) {
                let id = req.params.id
                res.send(carrito.mostrarProd(id))
            } else {
                res.send(carrito.listarProductos)
            }
        })

        router.post('/agregar/:id_producto', (req, res)=>{
            let id = req.params.id_producto
            let toAdd = productos.mostrarProd(id)
            res.send(carrito.nuevoProd(toAdd))
            //res.redirect('/productos/agregar')
        })

        router.delete('/borrar/:id', (req, res)=>{
            let id = req.params.id;
            res.send(carrito.eliminarProd(id))
        })
    
        return router
    }
}