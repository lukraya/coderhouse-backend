//let user = {name: 'none'}
const { alertNewUser } = require('../services/notification')

exports.signup = async (req, res, next)=>{
    //console.log(req.user)
    alertNewUser(req.user)

    res.redirect('http://localhost:3000/')
}

exports.logout = async (req, res, next)=>{
    //console.log(`logout? ${req.user}`)
    req.logout()
    /* if (!req.user) {
       user = {name: 'none'}
    }  */  
    //console.log(`nothing? ${req.user}`)
    res.json({msj: 'logged out!'})
}

exports.getUser = async (req, res, next)=>{
    //console.log(req.user)
    let user
    if (req.user) {
        user = req.user
    } else {
        user = 'none'
    }
    
    res.json(user)
}

/* exports.logUser = async (req, res, next)=>{
    userType = req.user.name

    res.redirect('http://localhost:3000')
} */
/* exports.getSignup = async (req, res, next)=>{
    res.send('Viste de signup')
} */
/* exports.createUser = async (req, res, next)=>{
    console.log(req.body)
    res.send('Nuevo usuario cread')
} */
/* exports.getSignupFailure = async (req, res, next)=>{
    res.send('sign up failed')
} */

/* exports.getLogin = async (req, res, next)=>{
    res.send('Viste de login')
} */
/* exports.getLoginFailure = async (req, res, next)=>{
    res.send('login failed')
} */