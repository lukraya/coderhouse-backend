const cartController = (service) => ({
    async addItem(req, res, next) {
        const { prod, userId } = req.body
        const result = await service.addItem(userId, prod)
        res.json({msj: result})
    },

    async getAllItems(req, res, next) {
        const result = await service.getAll(req.user._id)
        res.json(result)
    },

    async updateItem(req, res, next) {
        const {params: {cartId}, body, user} = req
        const result = await service.updateCartItem(user._id, cartId, body)
        res.json(result)    
    },

    async deleteItem(req, res, next) {
        const {params: {cartId}, user} = req
        const result = service.deleteCartItem(user._id, cartId)
        res.json(result)
    },

    async deleteAll(req, res, next) {
        const { userId } = req.body
        const result = await service.deleteAllItems(userId)
        //console.log(result)
        res.json(result)
    },

    async createOrder(req, res, next) {
        const {order} = req.body
        await alertNewOrder(order)
    
        res.json({msj: "Alertas enviadas."})
    },
})

module.exports = cartController