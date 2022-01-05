const productController = (service) => ({
    async createProduct(req, res, next) {
        const result = await service.createProduct(req.body)
        if (result === 'success') {
            res.redirect('http://localhost:3000/')
        } else {
            res.json({msj: 'error'})
        }
    },

    async getAllProducts(req, res, next) {
        const result = await service.getAllProducts()
        res.json(result)
    },

    async getProduct(req, res, next) {
        const {params: {productId}} = req
        const result = await service.getProduct(productId)
        res.json(result)
    },

    async updateProduct(req, res, next) {
        const {body, params: {productId}} = req
        await service.updateProduct(productId, body)
        res.redirect('http://localhost:3000/')
    },

    async deleteProduct(req, res, next) {
        //console.log('delete')
        const {params: {productId}} = req
        await service.deleteProduct(productId)
        res.json({msj: 'Producto eliminado'})
    },

    async getPriceUnder(req, res, next) {
        const result = await service.getPriceUnder()
        res.json(result)
    },
    
    async getPriceOver(req, res, next) {
        const result = await service.getPriceOver()
        res.json(result)
    },

    async getByStock(req, res, next) {
        const result = await service.getByStock()
        res.json(result)
    },

    async getByName(req, res, next) {
        const {params: {prodName}} = req
        const result = await service.getByName(prodName)
        res.json(result)
    },

    async getByCode(req, res, next) {
        const {params: {prodCode}} = req
        const result = await service.getByCode(prodCode)
        res.json(result)
    },

    async getCategory(req, res, next) {
        const {params: {categoryId}} = req
        const result = await service.getByCategory(categoryId)
        //console.log(result)
        res.json(result)
    },
})

module.exports = productController