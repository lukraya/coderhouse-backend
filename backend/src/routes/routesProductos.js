const { getAllProducts, getByStock, getPriceOver, getPriceUnder, getCategory,
     getByName, getByCode, getProduct } = require('../controller/product')


module.exports = (router)=>{
    router
    .get('/', getAllProducts)
    .get('/stock', getByStock)
    .get('/precio/menor', getPriceUnder)
    .get('/precio/mayor', getPriceOver)
    .get('/cateogry/:categoryId', getCategory)
    .get('/nombre/:prodName', getByName)
    .get('/codigo/:prodCode', getByCode)
    .get('/:productId', getProduct)

    return router
}