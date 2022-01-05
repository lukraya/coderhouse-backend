const authController = (service) => ({
    async signup(req, res, next) {
        service.alertNewUser(req.user)
    
        res.redirect('http://localhost:3000/')
    },

    async logout(req, res, next) {
        try {
            req.logout()
            res.json({msj: 'success'})
    
        } catch (error) {
            res.json({msj: 'error', error})
        }
    },

    async getUser(req, res, next) {
        let user
        if (req.user) {
            user = req.user
        } else {
            user = 'none'
        }
        
        res.json(user)
    },
})

module.exports = authController