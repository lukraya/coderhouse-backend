
exports.getSignup = async (req, res, next)=>{
    res.send('Viste de signup')
}
exports.createUser = async (req, res, next)=>{
    console.log(req.body)
    res.send('Nuevo usuario cread')
}
exports.getSignupFailure = async (req, res, next)=>{
    res.send('sign up failed')
}

exports.getLogin = async (req, res, next)=>{
    res.send('Viste de login')
}
exports.logUser = async (req, res, next)=>{
    res.send('usuario loggeado')
}
exports.getLoginFailure = async (req, res, next)=>{
    res.send('login failed')
}

exports.getLogout = async (req, res, next)=>{
    res.send('usuario desloggeado')
}
exports.getUserType = async (req, res, next)=>{
    console.log(`en usertype: ${req.user}`)
    let userType
    if (!req.user) {
        userType = 'none'
    } else if (req.user === 'admin') {
        userType = 'admin'
    } else {
        userType = 'user'
    }

    res.json(userType)
}