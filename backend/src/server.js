//CONFIG DEL SERVIDOR
const http = require('http')
const express = require('express')
const app = express()
const server = http.createServer(app)

const routerApi = express.Router()
const routerProductos = express.Router()
const routerCarrito = express.Router()

//Require middlewares
const cookieParser = require('cookie-parser')
const cors = require('cors')
const compression = require('compression')

//Setting middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
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