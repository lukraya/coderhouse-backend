const Archivo = require('./Archivo')

let cartFile = new Archivo('./src/files/cartFile.txt')

class Carrito {
    prodsCarrito = cartFile.leer();
    idCarrito = 0;
    
    get listarProductos() {
        if (this.prodsCarrito.length>0) {            
            return this.prodsCarrito
        } else {
            return '{error: "No hay productos en carrito."}'
        }
    }

    mostrarProd(id) {
        let prod = this.prodsCarrito.find(producto =>{
            return producto.idCart == id
        });
        if (prod == undefined) {
            return '{error: "Producto no encontrado."}'
        }

        return prod
    }

    nuevoProd(producto, timestamp) {        
        this.prodsCarrito.push({
            idCart: ++this.idCarrito,
            timestamp: timestamp,
            producto: {
                title: producto.title,
                price: producto.price,
                thumbnail: producto.thumbnail,
                description: producto.description,
                timestamp: producto.timestamp,
                stock: producto.stock,
                code: producto.code,
                idProd: producto.id,                
            }
        })

        cartFile.guardar(this.prodsCarrito)

        return (this.prodsCarrito[this.idCarrito - 1])
    }

    eliminarProd(id) {
        let indiceProd = this.prodsCarrito.findIndex(prod=>{
            return prod.idCart == id
        })
        let prodEliminado = this.prodsCarrito.splice(indiceProd, 1)[0]
        
        cartFile.guardar(this.prodsCarrito)

        return prodEliminado
    }
}

module.exports = new Carrito;