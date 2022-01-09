const orderService = (dao) => ({
    async createOrder(order) {
        const num = await dao.getNumOrders()
        order.orderNumber = num + 1
        const newOrder = await dao.createOrder(order)
        return newOrder
    }
})

module.exports = orderService