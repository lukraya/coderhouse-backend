const productController = require('../controller/product')
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
    router
    .get('/listar', productController.getAllProducts)
    .post('/agregar', checkAdmin, getTimestamp, productController.createProduct) //CargaProductos
    .patch('/actualizar/:productId', checkAdmin, productController.updateProduct)
    .delete('/borrar/:productId', checkAdmin, productController.deleteProduct)

    return router
}