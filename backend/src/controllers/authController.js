const authController = (service) => ({
    async signup(req, res) {
        service.alertNewUser(req.user)
        res.redirect('http://localhost:3000/')
    },

    async logout(req, res) {
        try {
            req.logout()
            res.json({msj: 'success'})
    
        } catch (error) {
            res.json({msj: 'error', error})
        }
    },

    async getUser(req, res) {
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