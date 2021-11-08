const { SESSION_SECRET, MONGO_URI } = require('./config/globals')

//CONFIG DEL SERVIDOR
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)

const routerApi = express.Router()
const routerProductos = express.Router()
const routerCarrito = express.Router()

//db
const MongoStore = require('connect-mongo')
const mongoOptions = {useNewUrlParser: true, useUnifiedTopology: true}

//Authentication
const passport = require('passport')
const session = require("express-session")
require('./src/auth/passportLocal')

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
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: 600 * 1000
        }
    })
)
//Setting middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser())
app.use(cors())
app.use(compression())


//Las rutas después de json o urlencoded!!
const routesApi = require('./routes/routesApi')
app.use('/api/productos', routesApi(routerApi))
const routesProductos = require('./routes/routesProductos')
app.use('/productos', routesProductos(routerProductos))
const routesCarrito = require('./routes/routesCarrito')
app.use('/carrito', routesCarrito(routerCarrito))


module.exports = server