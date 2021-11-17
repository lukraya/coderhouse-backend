const { signup, getUser, logUser, logout } = require('../controller/auth')
const passport = require('passport')
require('../auth/passportLocal')


module.exports = (router) => {
    router
    //.get('/signup', getSignup)
    .post('/signup', passport.authenticate('signup', { /* successRedirect: 'http://localhost:3000/', */ failureRedirect: 'http://localhost:3000/signup-failed' }), signup)
    //.get('/signup-failed', getSignupFailure)
    //.get('/login', getLogin)
    .post('/login', passport.authenticate('login', { successRedirect: 'http://localhost:3000/', failureRedirect: 'http://localhost:3000/login-failed' })/* , logUser */)
    //.get('/login-failed', getLoginFailure)

    .get('/logout', logout)
    .get('/user', getUser)

    return router
}