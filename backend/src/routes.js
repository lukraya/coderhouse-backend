module.exports = (router)=>{
    router.get('/api/coder', (req, res, next)=>{
        res.json({
            firstName: "Lu",
            lastName: "Kraya"
        })
    })

    return router
}