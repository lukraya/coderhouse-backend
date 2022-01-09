const router = require('express').Router()
const passport = require('passport')
require('../auth/passportLocal')

const authRoutes = (controller) => {
    router
    .post('/signup', passport.authenticate('signup', 
        { failureRedirect: 'http://localhost:3000/signup-failed' }), controller.signup)
    .post('/login', passport.authenticate('login', 
        { successRedirect: 'http://localhost:3000/', failureRedirect: 'http://localhost:3000/login-failed' }))
    .get('/logout', controller.logout)
    .get('/user', controller.getUser)

    return router
}

module.exports = authRoutes