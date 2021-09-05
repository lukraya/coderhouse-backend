//CONFIG DEL SERVIDOR
const express = require('express')
const routesApi = require('./routes/routesApi')
const routesProductos = require('./routes/routesProductos')
const routesCarrito = require('./routesCarrito')
const cors = require('cors')
const compression = require('compression')

const routerApi = express.Router()
const routerProductos = express.Router()
const routerCarrito = express.Router()
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(compression())

app.use('/api/productos', routesApi(routerApi))
app.use('/productos', routesProductos(routerProductos))
app.use('/carrito', routesCarrito(routerCarrito))

module.exports = app