const productModel = require('../dao/models/product')

module.exports = class {
    async createProduct(product){
        await productModel.create(product)
    }

    async getProduct(id){
        return productModel.findById(id)
    }

    async getAllProducts(){
        let prods = await productModel.find()
        return prods
    }

    async getPriceUnder(){
        let price = await productModel.find({price: {$lt: 60}})
        return price
    }

    async getPriceOver(){
        let price = await productModel.find({price: {$gte: 60}})
        return price
    }

    async getByStock(){
        let stock = await productModel.find({stock: {$gt: 0}})
        return stock
    }

    async getByName(prodName){
        let name = await productModel.find({name: prodName})
        return name
    }

    async getByCode(prodCode){
        let code = await productModel.find({code: prodCode})
        return code
    }

    async getCategory(categoryId){
        let category = await productModel.find({category: categoryId})
        return category
    }

    

    async updateProduct(id, data){
        const productUpdated = await productModel.findByIdAndUpdate(id, data, {
            new: true,
        })
        return productUpdated
    }

    async deleteProduct(id){
        await productModel.findByIdAndDelete(id)
    }
}