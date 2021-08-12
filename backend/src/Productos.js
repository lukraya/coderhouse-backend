const Archivo = require('./Archivo')

let prodFile = new Archivo('./src/files/prodFile.txt')

class Producto {
    productos = [];
    id = 0;

    get listarProductos() {
        //return this.productos
        //let result = prodFile.leer()
        console.log(`Log P12 ${prodFile.leer()}`)
        return prodFile.leer()
    }

    nuevoProd(producto) {        
        this.productos.push({
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            description: producto.description,
            timestamp: producto.timestamp,
            stock: producto.stock,
            code: producto.code,
            id: ++this.id
        })

        prodFile.guardar(this.productos)

        return (this.productos[this.id - 1])
    }

    mostrarProd(id) {
        let prod = this.productos.find(producto =>{
            return producto.id == id
        });
        if (prod == undefined) {
            return '{error: "Producto no encontrado."}'
        }

        return prod
    }

    actualizarProducto(cambios, id) {
        let indiceProd = this.productos.findIndex(prod=>{
            return prod.id == id
        })
        if (indiceProd < 0) {
            return '{error: "Producto no encontrado."}'
        }
        let prodActualizado = {...cambios, id: id}
        return this.productos[indiceProd] = prodActualizado;
    }

    eliminarProd(id) {
        let indiceProd = this.productos.findIndex(prod=>{
            return prod.id == id
        })
        return this.productos.splice(indiceProd, 1)[0]
    }
}

module.exports = new Producto;