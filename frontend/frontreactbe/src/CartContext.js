import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //Recibe información de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }
    //Crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, quantity, callback)=> {
        const subtotal = quantity * objetoItem.price
        const itemAgregado = {producto: objetoItem, cantidad: quantity, subtotal: subtotal}              
        callback(itemAgregado)
    }
    //Chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (producto)=> {
        console.log(producto)
        const existe = cart.find(element => element.producto._id === producto.producto._id)
        if (!existe) {
            setCart(cart => [...cart, producto])
            setCantidadTotal(cantidadTotal + producto.cantidad)
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }
    
    //Remover un item del carrito usando su id
    const removeItem = (itemId, quantity)=> {
        quitarItem(itemId, quantity, borrarItem)
    }
    const quitarItem = (itemId, quantity, callback)=> {
        const index = cart.findIndex(element => element.producto.id === itemId)
        callback(index, quantity)
    }
    const borrarItem = (index, quantity)=> {
        cart.splice(index, 1)
        setCart(cart)
        setCantidadTotal(cantidadTotal - quantity)
    }    

    //Remover todos los items
    const clear = ()=> {
        setCart([])
        setCantidadTotal(0)
    }

    //Sumar todos los subtotales
    const precioTotal = ()=>{
        return cart.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }


    return (
        <Provider value={{cart, cantidadTotal, addItem, removeItem, clear, precioTotal}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider}
export default CartProvider