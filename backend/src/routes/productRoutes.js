const router = require('express').Router()

const productRoutes = (controller) => {
    router
    .get('/', controller.getAllProducts)
    .get('/stock', controller.getByStock)
    .get('/precio/menor', controller.getPriceUnder)
    .get('/precio/mayor', controller.getPriceOver)
    .get('/cateogry/:categoryId', controller.getCategory)
    .get('/nombre/:prodName', controller.getByName)
    .get('/codigo/:prodCode', controller.getByCode)
    .get('/:productId', controller.getProduct)

    return router
}

module.exports = productRoutes