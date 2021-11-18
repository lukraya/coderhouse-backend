const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controller/product')
const dayjs = require('dayjs')


function getTimestamp(req, res, next) {
    req.body.timestamp = dayjs().format('DD/MM/YYYY HH:mm:ss')
    next()
}

module.exports = (router)=>{
    router    
    .post('/agregar', getTimestamp, createProduct)
    .post('/actualizar/:productId', updateProduct)
    .delete('/borrar/:productId', deleteProduct)

    return router
}