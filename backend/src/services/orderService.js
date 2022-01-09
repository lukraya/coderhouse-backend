const orderService = (dao) => ({
    async createOrder(order) {
        const num = await dao.getNumOrders()
        //console.log('service', num)
        order.orderNumber = num + 1
        const newOrder = await dao.createOrder(order)
        return newOrder
    }
})

module.exports = orderService