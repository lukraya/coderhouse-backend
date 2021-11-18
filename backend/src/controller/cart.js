//const CartService = require('../services/cart')
//const cart = new CartService
const userModel = require('../dao/models/user')
const { alertNewOrder } = require('../services/notification')
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
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
            //console.log('item agregado a cart')
        })
        //console.log(user.cart)
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

exports.deleteAll = async (req, res, next)=>{
    try {
        await userModel.findByIdAndUpdate(req.body.userId, {cart: []}) //works!
        //console.log('carrito vaciado')
        res.json({msj: 'success'})
        /* const user = await userModel.findById(req.user._id)
        user.cart.remove()
        user.save((err)=>{
            if (err) console.log(`error al vaciar cart`)
            console.log('cart vaciado')
        }) */
    } catch (error) {
        console.log(`error al vaciar el cart: ${error}`)
        res.json({msj: 'error'})
    }
}

exports.getAllItems = async (req, res, next)=>{
    if (req.user) {
        try {
            //console.log(req.user)
            const user = await userModel.findById(req.user._id)
            //console.log(user.cart)            

            res.json(user.cart)

        } catch (error) {
            console.log(error)    
        }
    }

    /* const items = await cart.getAllItems()
    res.json(items) */
}

exports.deleteItem = async (req, res, next)=>{
    //console.log('deleteItem')
    const {params: {cartId}} = req
    //await cart.deleteItem(cartId)
    try {
        //console.log('en try')
        const user = await userModel.findById(req.user._id)
        //console.log(user.cart.id(cartId))
        user.cart.id(cartId).remove()
        //Definitivamente necesito el save para que se guarde en la bd
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
            //console.log('item eliminado de cart')
        })
        //console.log(user.cart)
        res.json(user.cart)

    } catch (error) {
        console.log(error)
    }    
}

exports.updateItem = async (req, res, next)=>{
    const {params: {cartId}} = req
    //console.log(req.body)
    
    try {
        const user = await userModel.findById(req.user._id)
        user.cart.id(cartId).set(req.body)
        await user.save((err)=>{
            if (err) console.log(`error updating item`)
            //console.log(`item updated`)
        })
        //console.log(user.cart)
        res.json(user.cart)

    } catch (error) {
        console.log(error)
    }

    //const updatedItem = await cart.updateItem(cartId, body)
    //res.json(updatedItem)
}

exports.createOrder = async (req, res, next)=>{
    const {order} = req.body
    //console.log(order)
    await alertNewOrder(order)

    res.json({msj: "Alertas enviadas."})
    //Error de cors al user redirect
    //res.redirect('http://localhost:3000/checkout')
}