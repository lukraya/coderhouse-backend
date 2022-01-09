const cartController = (service) => ({
    async addItem(req, res) {
        const { prod, userId } = req.body
        const result = await service.addItem(userId, prod)
        res.json({msj: result})
    },

    async getAllItems(req, res) {
        const result = await service.getAll(req.user._id)
        res.json(result)
    },

    async updateItem(req, res) {
        const {params: {cartId}, body, user} = req
        const result = await service.updateCartItem(user._id, cartId, body)
        res.json(result)    
    },

    async deleteItem(req, res) {
        const {params: {cartId}, user} = req
        const result = service.deleteCartItem(user._id, cartId)
        res.json(result)
    },

    async deleteAll(req, res) {
        const { userId } = req.body
        const result = await service.deleteAllItems(userId)
        res.json(result)
    },
})

module.exports = cartController