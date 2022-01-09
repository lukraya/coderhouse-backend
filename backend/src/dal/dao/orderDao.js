const orderDao = (model) => ({
    async createOrder(order) {
        const newOrder = await model.create(order)
        return newOrder
    },

    async getNumOrders() {
        const orders = await model.find()
        //console.log('orders', orders)
        return orders.length
    }
})

module.exports = orderDao