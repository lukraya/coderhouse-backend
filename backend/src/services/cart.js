const cartModel = require('../dao/models/cart')

module.exports = class {
    async createItem(item){
        await cartModel.create(item)
    }

    async getAllItems(){
        let items = await cartModel.find()
        return items
    }

    async updateItem(id, data){
        const itemUpdated = await cartModel.findByIdAndUpdate(id, data, {
            new: true,
        })
        return itemUpdated
    }

    async deleteItem(id){
        await cartModel.findByIdAndDelete(id)
    }
}