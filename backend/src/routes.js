let productos = require('./Productos')

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
            res.send(productos.eliminarProducto(id))
        })
    
        return router
    },

    carrito: (router)=>{
        router.get('/', (req, res, next)=>{
            res.json({
                msj: "Esto es carrito"
            })
        })
    
        return router
    }
}