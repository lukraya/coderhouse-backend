class Carrito {
    prodsCarrito = [];
    idCarrito = 0;
    
    get listarProductos() {
        return this.prodsCarrito
    }

    nuevoProd(producto) {        
        this.prodsCarrito.push({
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            //idProd: producto.id,
            idCart: ++this.idCarrito
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

    /* actualizarProducto(cambios, id) {
        let indiceProd = this.productos.findIndex(prod=>{
            return prod.id == id
        })
        if (indiceProd < 0) {
            return '{error: "Producto no encontrado."}'
        }
        let prodActualizado = {...cambios, id: id}
        return this.productos[indiceProd] = prodActualizado;
    } */

    eliminarProd(id) {
        let indiceProd = this.prodsCarrito.findIndex(prod=>{
            return prod.idCart == id
        })
        return this.prodsCarrito.splice(indiceProd, 1)[0]
    }
}

module.exports= new Carrito;