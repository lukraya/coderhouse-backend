const { signup, getUser, logout } = require('../controller/auth')
const passport = require('passport')
require('../auth/passportLocal')


module.exports = (router) => {
    router
    .post('/signup', passport.authenticate('signup', { failureRedirect: 'http://localhost:3000/signup-failed' }), signup)
    .post('/login', passport.authenticate('login', { successRedirect: 'http://localhost:3000/', failureRedirect: 'http://localhost:3000/login-failed' }))
    
    .get('/logout', logout)
    .get('/user', getUser)

    return router
}