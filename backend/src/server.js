const { SESSION_SECRET, SESSION_EXPIRATION, MONGO_URI } = require('./config/globals')

//CONFIG DEL SERVIDOR
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)

//db
const MongoStore = require('connect-mongo')
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true}

//Authentication
const passport = require('passport')
const session = require("express-session")
require('./auth/passportLocal')

//Require middlewares
const cookieParser = require('cookie-parser')
const cors = require('cors')
const compression = require('compression')

//Middleware session
app.use(
    session({
        store: MongoStore.create({
            mongoUrl: MONGO_URI,
            mongoOptions,
        }),
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        rolling: true,
        cookie: {
            maxAge: SESSION_EXPIRATION * 1000
        }
    })
)

//Cors config
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    preflightContinue: true,
    optionsSuccessStatus: 200
}

//Setting middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use(compression())

const router = require('./routes')
app.use(router)


module.exports = server