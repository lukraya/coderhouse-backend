//const productos = require('./Productos')
const productController = require('../controller/product')


module.exports = (router)=>{
    router
    .get('/listar', productController.getAllProducts) //ItemListcontainer
    .get('/listar/cateogry/:categoryId', productController.getCategory) //ItemListContainer
    .get('/listar/:productId', productController.getProduct) //ItemDetailContainer
    
    /* .get('/listar/:productId?', (req, res)=>{
        if (req.params.id) {
            let id = req.params.id
            res.send(productController.getProduct(id))
        } else {
            res.send(productController.getAllProducts)
        }
    })

    .post('/agregar', checkAdmin, getTimestamp, (req, res)=>{
        let toAdd = req.body;
        res.send({msj: "Producto agregado", producto: productos.nuevoProd(toAdd)})
    })

    .patch('/actualizar/:id', checkAdmin, getTimestamp, (req, res)=>{
        let toChange = req.body;
        let id = req.params.id;
        res.send({msj: "Producto actualizado", producto: productos.actualizarProducto(toChange, id)})
    })

    .delete('/borrar/:id', checkAdmin, (req, res)=>{
        let id = req.params.id;
        res.send({msj: "Producto eliminado", producto: productos.eliminarProd(id)})
    }) */

    return router
}