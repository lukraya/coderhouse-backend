import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    //const [user, setUser] = useState({})
    const [cart, setCart] = useState([])
    //const [cantidadTotal, setCantidadTotal] = useState(0)
    //Queda hacer una función que sume las cantidades de los items en cart, traidos de la db
    //Probablemente algo como preciototal()

    const getUser = async ()=>{
        const response = await fetch('http://localhost:9000/auth/user', 
                {credentials: 'include'})
        const result = await response.json()
        //console.log(result)
        return result
    }

    const getCart = async ()=>{
        const response = await fetch('http://localhost:9000/carrito/listar',
                {credentials: 'include'})
        const result = await response.json()
        console.log(result)
        return result
    }

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
       const existe = cart.find(element => element.product._id === prod.product._id)
        if (!existe) {
            createItem(prod)
            //setCantidadTotal(cantidadTotal + prod.quantity)
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }    
    //Actualizar el usuario con propiedad cart! (Post a db - OLD)
    const createItem = async(prod)=>{
        const user = await getUser()
        //console.log(user._id)
        fetch(`http://localhost:9000/carrito/agregar/${user._id}`, {
            method: 'PATCH', //PATCH IS CASE SENSITIVE!!!!!!!!!!!!!!!
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                item: prod,
                userId: user._id
            })
        })
        /* fetch('http://localhost:9000/carrito/agregar', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        }) */
    }

    //Buscar en la db
    const getItems = async()=>{
        const response = await fetch('http://localhost:9000/carrito')
        const result = await response.json()
        setCart(result)
    }
    
    //Remover un item del carrito usando su id
    const removeItem = (itemId)=> {
        fetch(`http://localhost:9000/carrito/borrar/${itemId}`, {
            method: 'delete'
        })
        getItems()
    }

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
        <Provider value={{cart, /* cantidadTotal, */ getItems, addItem, removeItem, /* clear, */ precioTotal, getUser, getCart}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider}
export default CartProvider