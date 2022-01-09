const orderDao = (model) => ({
    async createOrder(order) {
        const newOrder = await model.create(order)
        return newOrder
    },

    async getNumOrders() {
        const orders = await model.find()
        return orders.length
    }
})

module.exports = orderDao