const { getAllProducts, getByStock, getPriceOver, getPriceUnder, getCategory,
     getByName, getByCode, getProduct } = require('../controller/product')


module.exports = (router)=>{
    router
    .get('/', getAllProducts) //ItemListcontainer
    .get('/stock', getByStock) //ItemListContainer
    .get('/precio/menor', getPriceUnder) //ItemListContainer
    .get('/precio/mayor', getPriceOver) //ItemListContainer
    .get('/cateogry/:categoryId', getCategory) //ItemListContainer
    .get('/nombre/:prodName', getByName) //ItemListContainer
    .get('/codigo/:prodCode', getByCode) //ItemListContainer
    .get('/:productId', getProduct) //ItemDetailContainer    

    return router
}