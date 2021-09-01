//const product = require('../dao/models/product')
const ProductService = require('../services/product')
const product = new ProductService

exports.createProduct = async (req, res, next)=>{        
    await product.createProduct(req.body)
    res.json({msg: "Producto creado"})
}

exports.getProduct = async (req, res, next)=>{
    try {
        const {params: {productId}} = req
        const prod = await product.getProduct(productId)
        res.json(prod)
    } catch (error) {
        console.log(`Producto no encontrado. Error: ${error}`)
    }
    //return product.getProduct(productId)
}

exports.getAllProducts = async (req, res, next)=>{
    const productos = await product.getAllProducts()
    res.json(productos)
}

exports.updateProduct = async (req, res, next)=>{
    const {body, params: {productId}} = req
    const updatedProduct = await product.updateProduct(productId, body)
    res.json(updatedProduct)
}

exports.deleteProduct = async (req, res, next)=>{
    const {params: {productId}} = req
    await product.deleteProduct(productId)
    res.json({msg: "Producto eliminado"})
} 