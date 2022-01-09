const productController = (service) => ({
    async createProduct(req, res) {
        console.log('prod body', req.body)
        const result = await service.createProduct(req.body)
        if (result === 'success') {
            res.redirect('http://localhost:3000/')
        } else {
            res.json({msj: 'error'})
        }
    },

    async getAllProducts(req, res) {
        const result = await service.getAllProducts()
        res.json(result)
    },

    async getProduct(req, res) {
        const {params: {productId}} = req
        const result = await service.getProduct(productId)
        res.json(result)
    },

    async updateProduct(req, res) {
        const {body, params: {productId}} = req
        await service.updateProduct(productId, body)
        res.redirect('http://localhost:3000/')
    },

    async deleteProduct(req, res) {
        const {params: {productId}} = req
        await service.deleteProduct(productId)
        res.json({msj: 'Producto eliminado'})
    },

    async getPriceUnder(req, res) {
        const result = await service.getPriceUnder()
        res.json(result)
    },
    
    async getPriceOver(req, res) {
        const result = await service.getPriceOver()
        res.json(result)
    },

    async getByStock(req, res) {
        const result = await service.getByStock()
        res.json(result)
    },

    async getByName(req, res) {
        const {params: {prodName}} = req
        const result = await service.getByName(prodName)
        res.json(result)
    },

    async getByCode(req, res) {
        const {params: {prodCode}} = req
        const result = await service.getByCode(prodCode)
        res.json(result)
    },

    async getCategory(req, res) {
        const {params: {categoryId}} = req
        const result = await service.getByCategory(categoryId)
        res.json(result)
    },
})

module.exports = productController