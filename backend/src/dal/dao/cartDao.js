const cartDao = (model) => ({
    async createItem(userId, cartItem) {
        try {
            const user = await model.findById(userId)            
            user.cart.push(cartItem)
            await user.save((err)=>{
                if (err) console.log(`error saving doc`)
            })
            const itemAdded = user.cart[user.cart.length - 1]
            //console.log('cartdao', user.cart)
            return itemAdded
        } catch (error) {
            console.log('Cart item creation failed', error)
        }
    },

    async getAll(userId) {
        try {
            const { cart } = await model.findById(userId, 'cart')
            //Arriba 'cart' podría ser tmb select: 'cart -_id', para excluir el id de la rta y no tener que
            //hacer destructure
            return cart
        } catch (error) {
            console.log('Get cart failed', error)
        }
    },

    async updateItem(userId, cartId, cartItem) {
        try {
            const user = await model.findById(userId)
            user.cart.id(cartId).set(cartItem)
            await user.save((err)=>{
                if (err) console.log(`error updating item`)
            })

            return user.cart
        } catch (error) {
            console.log('Cart item update failed', error)
        }
    },

    async deleteItem(userId, cartId) {
        try {
            const user = await model.findById(userId)
            user.cart.id(cartId).remove()
            await user.save((err)=>{
                if (err) console.log(`error saving doc`)
            })

            return user.cart
        } catch (error) {
            console.log('Deleting cart item failed', error)
        }
    },

    async deleteAll(userId) {
        try {
            const { cart } = await model.findByIdAndUpdate(userId, {cart: []}, {
                new: true,
            })

            return cart
        } catch (error) {
            console.log('Emptying cart failed', error)
        }
    },
})

module.exports = cartDao