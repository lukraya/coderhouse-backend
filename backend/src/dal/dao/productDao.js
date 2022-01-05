const productDao = (model) => ({
    async create(product) {
        try {
            const newProduct = await model.create(product)
            return newProduct
        } catch (error) {
            console.log('Product creation failed', error)
        }
    },

    async getAll() {
        try {
            const products = await model.find().lean()
            return products
        } catch (error) {
            console.log('Get all products failed', error)
        }
    },

    async getById(id) {
        try {
            const product = await model.findById(id)
            return product
        } catch (error) {
            console.log('Get product by id failed', error)
        }
    },

    async update(id, data) {
        try {
            const updatedProduct = await model.findByIdAndUpdate(id, data, {
                new: true,
            })
            return updatedProduct
        } catch (error) {
            console.log('Product update failed', error)
        }
    },

    async delete(id) {
        try {
            const deletedProduct = await model.findByIdAndDelete(id)
            return deletedProduct
        } catch (error) {
            console.log('Deleting product failed', error)
        }
    },

    async getPriceUnder() {
        try {
            const priceUnder = await model.find({price: {$lt: 60}})
            return priceUnder
        } catch (error) {
            console.log('Filter by price under 60 failed', error)
        }
    },

    async getPriceOver() {
        try {
            const priceOver = await model.find({price: {$gte: 60}})
            return priceOver
        } catch (error) {
            console.log('Filter by price over 60 failed', error)
        }
    },

    async getByStock() {
        try {
            const inStock = await model.find({stock: {$gt: 0}})
            return inStock
        } catch (error) {
            console.log('Filter by stock failed', error)
        }
    },

    async getByName(prodName) {
        try {
            const name = await model.find({name: prodName})
            return name
        } catch (error) {
            console.log('Filter by name failed', error)
        }
    },

    async getByCode(prodCode) {
        try {
            const code = await model.find({code: prodCode})
            return code
        } catch (error) {
            console.log('Filter by code failed', error)
        }
    },

    async getByCategory(categoryId) {
        try {
            const category = await model.find({category: categoryId})
            return category
        } catch (error) {
            console.log('Filter by category failed', error)
        }
    } 
})

module.exports = productDao