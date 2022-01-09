const orderController = ({ orderService, notificationService}) => ({
    async createOrder(req, res, next) {
        const { order } = req.body 
        //console.log(order)
        const result = await orderService.createOrder(order)
        await notificationService.alertNewOrder(order)

        res.json({msg: 'success', newOrder: result})
    }
})

module.exports = orderController