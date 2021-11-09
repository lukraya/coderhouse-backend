let userType = 'none'

exports.logUser = async (req, res, next)=>{
    //console.log(`session ${req.session.passport.user}`)
    //console.log(`user ${req.user}`)
    userType = req.user.name

    res.redirect('http://localhost:3000')
}

exports.logout = async (req, res, next)=>{
    //console.log(`logout? ${req.user}`)
    
    req.logout()
    if (!req.user) {
        userType = 'none'
    }
   
    //console.log(`nothing? ${req.user}`)
    res.json({msj: 'logged out!'})
}

exports.getUserType = async (req, res, next)=>{
    //console.log(`en usertype: ${userType}`)
    //console.log(`en usertype: ${req.session.passport.user}`)
    //console.log(`user? ${req.user}`)
    if (req.user) {
        userType = req.user.name
    }
    res.json(userType)
}

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