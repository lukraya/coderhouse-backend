import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    //Queda hacer una función que sume las cantidades de los items en cart, traidos de la db
    //Probablemente algo como preciototal()

    //Recibe información de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }
    //Crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, cantidad, callback)=> {
        const subtotal = cantidad * objetoItem.price
        const itemAgregado = {product: objetoItem, quantity: cantidad, subtotal: subtotal}              
        callback(itemAgregado)
    }
    //Chuequea si el producto ya fue agregado, si no, lo agrega
    const isInCart = (prod)=> {
        //getItems() //NO BLOQUEA, ASYNC/AWAIT NO SOLUCIONA, NO PONER EN EL INICIO DEL ESTADO, USEEFFECT??
        //console.log(cart[0].product._id)
        const existe = cart.find(element => element.product._id === prod.product._id)
        if (!existe) {
            //setCart(cart => [...cart, prod])
            createItem(prod)
            //setCantidadTotal(cantidadTotal + prod.quantity)
            //console.log("el producto es nuevo")
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }    
    //Post a db
    const createItem = async(prod)=>{
        //console.log(prod.product)
        fetch('http://localhost:9000/carrito/agregar', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        })
    }

    //Buscar en la db
    const getItems = async()=>{
        const response = await fetch('http://localhost:9000/carrito')
        const result = await response.json()
        setCart(result)
    }
    
    //Remover un item del carrito usando su id
    const removeItem = (itemId, /* quantity */)=> {
        //console.log(itemId)
        fetch(`http://localhost:9000/carrito/borrar/${itemId}`, {
            method: 'delete'
        })
        getItems()
        //quitarItem(itemId, quantity, borrarItem)
    }
    //Obsoletas de momento
    /* const quitarItem = (itemId, quantity, callback)=> {
        const index = cart.findIndex(element => element.product._id === itemId)
        callback(index, quantity)
    }
    const borrarItem = (index, quantity)=> {
        cart.splice(index, 1)
        setCart(cart)
        setCantidadTotal(cantidadTotal - quantity)
    } */    

    //Remover todos los items
    /* const clear = ()=> {
        setCart([])
        setCantidadTotal(0)
    } */

    //Sumar todos los subtotales
    const precioTotal = ()=>{
        return cart.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }


    return (
        <Provider value={{cart, cantidadTotal, getItems, addItem, removeItem, /* clear, */ precioTotal}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider}
export default CartProvider