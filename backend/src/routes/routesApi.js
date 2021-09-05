const productController = require('../controller/product')
const dayjs = require('dayjs')

let admin = true

/* function checkAdmin(req, res, next) {
    if(admin) {
        next()
    } else {
        res.send({error: "Acción no autorizada para el usuario"})
    }
} */

function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

module.exports = (router)=>{
    router
    .get('/', (req, res)=>{res.send({admin: admin})}) //ApiProductsContainer
    .get('/listar', productController.getAllProducts) //ApiProductsListContainer
    .post('/agregar', /* checkAdmin, */ getTimestamp, productController.createProduct) //CreateProductForm
    .post('/actualizar/:productId', /* checkAdmin, */ productController.updateProduct) //UpdateProductForm - no puedo usar patch en el form!!
    .delete('/borrar/:productId', /* checkAdmin, */ productController.deleteProduct) //ApiProductItem

    return router
}