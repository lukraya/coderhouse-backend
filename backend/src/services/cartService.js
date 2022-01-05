const cartService = (dao) => ({
    async addItem(userId, item) {
        const itemAdded = await dao.createItem(userId, item)
        if (itemAdded.name === item.name) {
            return 'success'
        } else {
            return 'No se pudo agregar el item'
        }
    },

    async getAll(userId) {
        const cart = await dao.getAll(userId)
        return cart
    },

    async updateCartItem(userId, cartId, item) {
        const updatedCart = await dao.updateItem(userId, cartId, item)
        return updatedCart
    },

    async deleteCartItem(userId, cartId) {
        const updatedCart = await dao.deleteItem(userId, cartId)
        return updatedCart
    },

    async deleteAllItems(userId) {
        const emptiedCart = await dao.deleteAll(userId)
        if (emptiedCart.length == 0) {
            return {msj: 'success'}
        } else {
            return {msj: 'success'}
        }
    },
})

module.exports = cartService