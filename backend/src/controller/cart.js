const CartService = require('../services/cart')
const cart = new CartService

exports.createItem = async (req, res, next)=>{
    await cart.createItem(req.body)
    res.json({msg: "Cart item creado"})
}

exports.getAllItems = async (req, res, next)=>{
    const items = await cart.getAllItems()
    res.json(items)
}

exports.updateItem = async (req, res, next)=>{
    const {body, params: {cartId}} = req
    const updatedItem = await cart.updateItem(cartId, body)
    res.json(updatedItem)
}

exports.deleteItem = async (req, res, next)=>{
    const {params: {cartId}} = req
    await cart.deleteItem(cartId)
    res.json({msg: "Item eliminado"})
}