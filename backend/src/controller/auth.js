const { alertNewUser } = require('../services/notification')

exports.signup = async (req, res, next)=>{
    alertNewUser(req.user)

    res.redirect('http://localhost:3000/')
}

exports.logout = async (req, res, next)=>{
    req.logout()

    res.json({msj: 'logged out!'})
}

exports.getUser = async (req, res, next)=>{
    let user
    if (req.user) {
        user = req.user
    } else {
        user = 'none'
    }
    
    res.json(user)
}