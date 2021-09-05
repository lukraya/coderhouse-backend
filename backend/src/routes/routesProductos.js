//const productos = require('./Productos')
const productController = require('../controller/product')


module.exports = (router)=>{
    router
    .get('/listar', productController.getAllProducts) //ItemListcontainer
    .get('/listar/stock', productController.getByStock) //ItemListContainer
    .get('/listar/precio/menor', productController.getPriceUnder) //ItemListContainer
    .get('/listar/precio/mayor', productController.getPriceOver) //ItemListContainer
    .get('/listar/cateogry/:categoryId', productController.getCategory) //ItemListContainer
    .get('/listar/nombre/:prodName', productController.getByName) //ItemListContainer
    .get('/listar/codigo/:prodCode', productController.getByCode) //ItemListContainer
    .get('/listar/:productId', productController.getProduct) //ItemDetailContainer    

    return router
}