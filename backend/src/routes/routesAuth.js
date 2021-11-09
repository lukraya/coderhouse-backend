const { getUserType, logUser, logout } = require('../controller/auth')
const passport = require('passport')
require('../auth/passportLocal')

const msj = (req, res, next) => {
    console.log('paso por post signup')
    console.log(req.body)
    next()
}

module.exports = (router) => {
    router
    //.get('/signup', getSignup)
    .post('/signup', /* msj, */ passport.authenticate('signup', { successRedirect: 'http://localhost:3000/login', failureRedirect: 'http://localhost:3000/signup-failed' }))
    //.get('/signup-failed', getSignupFailure)

    //.get('/login', getLogin)
    .post('/login', passport.authenticate('login', { /* successRedirect: 'http://localhost:3000/', */ failureRedirect: 'http://localhost:3000/login-failed' }), logUser)
    //.get('/login-failed', getLoginFailure)

    .get('/logout', logout)
    .get('/userType', getUserType)

    return router
}