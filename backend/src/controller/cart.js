const userModel = require('../dao/models/user')
const { alertNewOrder } = require('../services/notification')

exports.addItem = async (req, res, next)=>{
    const { prod, userId } = req.body

    try {
        const user = await userModel.findById(userId)
        user.cart.push(prod)
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
        })

        res.json(user.cart)

    } catch (error) {
        console.log(`error al agregar item a cart`)
    }
}

exports.deleteAll = async (req, res, next)=>{
    try {
        await userModel.findByIdAndUpdate(req.body.userId, {cart: []}) 
        res.json({msj: 'success'})

    } catch (error) {
        console.log(`error al vaciar el cart: ${error}`)
        res.json({msj: 'error'})
    }
}

exports.getAllItems = async (req, res, next)=>{
    if (req.user) {
        try {
            const user = await userModel.findById(req.user._id)
            res.json(user.cart)

        } catch (error) {
            console.log(error)    
        }
    }
}

exports.deleteItem = async (req, res, next)=>{
    const {params: {cartId}} = req
    try {
        const user = await userModel.findById(req.user._id)
        user.cart.id(cartId).remove()
        await user.save((err)=>{
            if (err) console.log(`error saving doc`)
        })
        res.json(user.cart)

    } catch (error) {
        console.log(error)
    }    
}

exports.updateItem = async (req, res, next)=>{
    const {params: {cartId}} = req
    
    try {
        const user = await userModel.findById(req.user._id)
        user.cart.id(cartId).set(req.body)
        await user.save((err)=>{
            if (err) console.log(`error updating item`)
        })
        res.json(user.cart)

    } catch (error) {
        console.log(error)
    }
}

exports.createOrder = async (req, res, next)=>{
    const {order} = req.body
    await alertNewOrder(order)

    res.json({msj: "Alertas enviadas."})
}