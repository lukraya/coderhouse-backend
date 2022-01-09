const orderController = ({ orderService, notificationService}) => ({
    async createOrder(req, res) {
        const { order } = req.body
        const result = await orderService.createOrder(order)
        await notificationService.alertNewOrder(order)

        res.json({msg: 'success', newOrder: result})
    }
})

module.exports = orderController