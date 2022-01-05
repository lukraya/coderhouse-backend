const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { validatePassword, generatePassword } = require('../utils/passportLocalUtils')
const userModel = require('../dal/models/user')

const loginVerifyCallback = (req, email, password, done)=>{
    userModel.findOne({email})
        .then(async (user)=>{
            if (!user) { return done(null, false)}

            const isValid = validatePassword(password, user.hash, user.salt)
            if (isValid) {
                return done(null, user)
            } else {
                return done(null, false)
            }
        })
        .catch((err)=>{
            done(err)
        })
}
const loginStrategy = new LocalStrategy({
    passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password',
}, loginVerifyCallback)

passport.use('login', loginStrategy)


const signupVerifyCallback = (req, email, password, done)=>{
    const { name, address, age, cellphone, avatar } = req.body
    userModel.findOne({email})
        .then(async (user)=>{
            if(user) return done(null, false)
            else {
                const saltHash = generatePassword(password)
                const { salt, hash } = saltHash
                const newUser = {
                    name,
                    address,
                    age,
                    cellphone,
                    avatar,
                    email,
                    hash,
                    salt
                }
                userModel.create(newUser)
                    .then((user)=>{
                        return done(null, user)
                    })
                    .catch((err)=>{ 
                        done(err) })
            }
        })
        .catch((err)=>{ 
            done(err) })
}
const signupStrategy = new LocalStrategy(
    {passReqToCallback: true,
    usernameField: 'email',
    passwordField: 'password'},
    signupVerifyCallback
)

passport.use('signup', signupStrategy)


passport.serializeUser((user, done)=>{
    done(null, user.id)
})
passport.deserializeUser((id, done)=>{
    userModel.findById(id, (err, user)=>{
        done(err, user)
    })
})