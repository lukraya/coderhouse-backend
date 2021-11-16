const CartService = require('../services/cart')
const cart = new CartService
const userModel = require('../dao/models/user')
//Puede que técnicamente esta variable sea una práctica muy poco correcta
//let cartProds = []

exports.addItem = async (req, res, next)=>{
    //console.log(req.body)
    const { prod, userId } = req.body
    //cartProds.push(item)
    //console.log(cartProds)
    //console.log(userId)
    try {
        const user = await userModel.findById(userId)
        //console.log(user)
        user.cart.push(prod)
        //console.log(user.cart)
        user.save((err)=>{
            if (err) console.log(`error saving doc`)
            console.log('success')
        })

        res.json(user.cart)

    } catch (error) {
        console.log(`error al agregar item a cart`)
    }

    /* try {
        const result = await userModel.findByIdAndUpdate(userId, {cart: cartProds}, (doc)=>{
            return doc
        })
        //console.log(result)
        res.json({msj: 'success'})
    } catch (error) {
        //console.log(error)
        res.json({msj: 'error'})
    } */
    
    //await cart.createItem(req.body)
}

exports.getAllItems = async (req, res, next)=>{
    if (req.user) {
        try {
            //console.log(req.user)
            const user = await userModel.findById(req.user._id)
            //console.log(user.cart)
            cartProds = user.cart

            res.json(cartProds)

            //Me sale un error de "query already executed", pero el prod se agrega correctamente
        } catch (error) {
            console.log(error)    
        }
    }

    /* const items = await cart.getAllItems()
    res.json(items) */
}




exports.updateItem = async (req, res, next)=>{
    const {body, params: {cartId}} = req
    console.log(body)
    const updatedItem = await cart.updateItem(cartId, body)
    res.json(updatedItem)
}

exports.deleteItem = async (req, res, next)=>{
    const {params: {cartId}} = req
    await cart.deleteItem(cartId)
    res.json({msg: "Item eliminado"})
}