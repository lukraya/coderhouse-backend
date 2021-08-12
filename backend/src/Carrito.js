class Carrito {
    prodsCarrito = [];
    idCarrito = 0;
    
    get listarProductos() {
        return this.prodsCarrito
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
        });

        return (this.prodsCarrito[this.idCarrito - 1])
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

    eliminarProd(id) {
        let indiceProd = this.prodsCarrito.findIndex(prod=>{
            return prod.idCart == id
        })
        return this.prodsCarrito.splice(indiceProd, 1)[0]
    }
}

module.exports = new Carrito;