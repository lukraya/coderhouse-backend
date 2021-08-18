const Archivo = require('./Archivo')

let prodFile = new Archivo('./src/files/prodFile.txt')

class Producto {
    productos = prodFile.leer();
    id = 0;

    get listarProductos() {
        if (this.productos.length>0) {            
            return this.productos
        } else {
            return '{error: "No se encontraron productos."}'
        }
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

    actualizarProducto(cambios, id) {
        let indiceProd = this.productos.findIndex(prod=>{
            return prod.id == id
        })
        if (indiceProd < 0) {
            return '{error: "Producto no encontrado."}'
        }
        let prodActualizado = {...cambios, id: id}
        this.productos[indiceProd] = prodActualizado

        prodFile.guardar(this.productos)

        return prodActualizado
    }

    eliminarProd(id) {
        let indiceProd = this.productos.findIndex(prod=>{
            return prod.id == id
        })
        let prodEliminado = this.productos.splice(indiceProd, 1)[0]
        
        prodFile.guardar(this.productos)

        return prodEliminado
    }
}

module.exports = new Producto;