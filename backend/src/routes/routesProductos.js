//const productos = require('./Productos')
const productController = require('../controller/product')


module.exports = (router)=>{
    router
    .get('/', productController.getAllProducts) //ItemListcontainer
    .get('/stock', productController.getByStock) //ItemListContainer
    .get('/precio/menor', productController.getPriceUnder) //ItemListContainer
    .get('/precio/mayor', productController.getPriceOver) //ItemListContainer
    .get('/cateogry/:categoryId', productController.getCategory) //ItemListContainer
    .get('/nombre/:prodName', productController.getByName) //ItemListContainer
    .get('/codigo/:prodCode', productController.getByCode) //ItemListContainer
    .get('/:productId', productController.getProduct) //ItemDetailContainer    

    return router
}