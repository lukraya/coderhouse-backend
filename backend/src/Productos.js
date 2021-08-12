class Producto {
    productos = [];
    id = 0;

    get listarProductos() {
        return this.productos
    }

    nuevoProd(producto) {        
        this.productos.push({
            title: producto.title,
            price: producto.price,
            thumbnail: producto.thumbnail,
            id: ++this.id
        });

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

module.exports= new Producto;