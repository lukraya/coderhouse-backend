//CONFIG DEL SERVIDOR
const express = require('express')
const {productos, carrito} = require('./routes')
const cors = require('cors')
const compression = require('compression')

const routerProductos = express.Router()
const routerCarrito = express.Router()
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(compression())

app.use('/productos', productos(routerProductos))
app.use('/carrito', carrito(routerCarrito))

module.exports = app