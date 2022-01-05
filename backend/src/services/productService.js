const productService = (dao) => ({
    async createProduct(product){
        const newProd = await dao.create(product)
        if (newProd.name === product.name) {
            return 'success'
        } else {
            return 'error'
        }
    },

    async getAllProducts() {
        const prods = await dao.getAll()
        return prods
    },

    async getProduct(id) {
        const prod = await dao.getById(id)
        //console.log(prod._id)
        if (prod._id == id) { //IMPORTANTE: === falla, por new ObjectId
            return prod
        } else {
            return 'error'
        }
    },

    async updateProduct(id, data) {
        const updatedProd = await dao.update(id, data)
        if (updatedProd) {
            return updatedProd
        } else {
            return 'error'
        }
    },

    async deleteProduct(id) {
        const deletedProd = await dao.delete(id)
        if (deletedProd) {
            return 'success'
        } else {
            return 'Producto no eliminado'
        }
    },

    async getPriceUnder() {
        const priceUnder = await dao.getPriceUnder()
        return priceUnder
    },

    async getPriceOver() {
        const priceOver = await dao.getPriceOver()
        return priceOver
    },

    async getByStock() {
        const stock = await dao.getByStock()
        return stock
    },
    
    async getByName() {
        const name = await dao.getByName()
        return name
    },

    async getByCode() {
        const code = await dao.getByCode()
        return code
    },

    async getByCategory(id) {
        const category = await dao.getByCategory(id)
        return category
    },
})

module.exports = productService