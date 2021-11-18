const ProductService = require('../services/product')
const product = new ProductService
//Este service está de más

exports.createProduct = async (req, res, next)=>{
    await product.createProduct(req.body)
    res.redirect('http://localhost:3000/')
}

exports.getProduct = async (req, res, next)=>{
    try {
        const {params: {productId}} = req
        const prod = await product.getProduct(productId)
        res.json(prod)
    } catch (error) {
        console.log(`Producto no encontrado. Error: ${error}`)
    }
}

exports.getAllProducts = async (req, res, next)=>{
    const productos = await product.getAllProducts()
    res.json(productos)
}

exports.getPriceUnder = async (req, res, next)=>{
    const price = await product.getPriceUnder()
    res.json(price)
}

exports.getPriceOver = async (req, res, next)=>{
    const price = await product.getPriceOver()
    res.json(price)
}

exports.getByStock = async (req, res, next)=>{
    const stock = await product.getByStock()
    res.json(stock)
}

exports.getByName = async (req, res, next)=>{
    try {
        const {params: {prodName}} = req
        const name = await product.getByName(prodName)
        res.json(name)
    } catch (error) {
        console.log(error)
    }
}

exports.getByCode = async (req, res, next)=>{
    try {
        const {params: {prodCode}} = req
        const code = await product.getByCode(prodCode)
        res.json(code)
    } catch (error) {
        console.log(error)
    }
}

exports.getCategory = async (req, res, next)=>{
    try {
        const {params: {categoryId}} = req
        const category = await product.getCategory(categoryId)
        res.json(category)
    } catch (error) {
        console.log(error)
    }
}

exports.updateProduct = async (req, res, next)=>{
    const {body, params: {productId}} = req
    await product.updateProduct(productId, body)
    res.redirect('http://localhost:3000/')
}

exports.deleteProduct = async (req, res, next)=>{
    console.log('delete')
    const {params: {productId}} = req
    await product.deleteProduct(productId)
    res.json({msj: "Producto eliminado"})
} 