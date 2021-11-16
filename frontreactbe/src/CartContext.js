import React, { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [user, setUser] = useState('none')
    const [cart, setCart] = useState([])
    const [cantidadTotal, setCantidadTotal] = useState(0)
    //Queda hacer una función que sume las cantidades de los items en cart, traidos de la db. Probablemente algo como preciototal()

    //Trae el user --- NO setear acá cart: pisa otros setCart con data desactualizada. Será por cache de la req?
    const getUser = async ()=>{
        const response = await fetch('http://localhost:9000/auth/user', 
                {credentials: 'include'})
        //console.log(response)
        const result = await response.json()
        //console.log(result)
        if (result._id !== user._id) {
            console.log('resultId distinta de userId, setUser')
            setUser(result)  //después de esto recarga, ergo no llega a hacer nada que venga después en el bloque  
        }
        /* if ((user !== 'none') && (user.name !== 'admin')) { //tal vez no hacen falta los paréntesis, pero por ahora quedan
            console.log('tengo user y seteo cart')
            setCart(user.cart)
            //me está trayendo un cart desactualizado, distinto a la bd. Cache de la petición??
            //console.log(cart)
        }  */     

        /* try {
                       
        } catch (error) {
            console.log(`invalid json: undefined`)
            if (user !== undefined) {

            }
        } */
        //return result
    }

    
    //Recibe información de ItemDetail
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }
    //Crea el producto para pasarlo a la lógica
    const crearProducto = (objetoItem, cantidad, callback)=> {
        const subtotal = cantidad * objetoItem.price
        const itemAgregado = {product: objetoItem, quantity: cantidad, subtotal/* subtotal: subtotal */}              
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
    //Actualizar el usuario con propiedad cart! (Post a db & getting the user: OLD)
    const createItem = async(prod)=>{
        const userId = user._id
        //console.log(userId)
        const response = await fetch(`http://localhost:9000/carrito/agregar/`, {
            method: 'post', //new info to add
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prod,
                userId
            })
        })
        const result = await response.json()
        //console.log(result)
        setCart(result)

        /* const user = await getUser()
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
        }) */

        /* fetch('http://localhost:9000/carrito/agregar', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(prod)
        }) */
    }

    //Remover todos los items
    const clear = async ()=> {
        const response = await fetch(`http://localhost:9000/carrito/borrar/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user._id
            })
        })
        const result = await response.json()
        //console.log(result)
        if (result.msj === 'success') {
            setCart([])
        } else { alert('Hubo un error!') }
    }

    //Trae user.cart
    const getCart = async ()=>{
        const response = await fetch('http://localhost:9000/carrito/listar',
                {credentials: 'include'})
        const result = await response.json()
        //console.log(result)
        setCart(result)
    }
    

    //Buscar en la db
    /* const getItems = async()=>{
        const response = await fetch('http://localhost:9000/carrito')
        const result = await response.json()
        setCart(result)
    } */
    
    //Remover un item del carrito usando su id
    const removeItemCart = async (itemId)=> {
        //console.log(`remove`)
        const response = await fetch(`http://localhost:9000/carrito/borrar/${itemId}`, {
            method: 'delete',
            credentials: 'include'
        })
        const result = await response.json()
        setCart(result)
        //getItems()
    }

    

    //Sumar todos los subtotales
    const precioTotal = (array)=>{
        return array.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }


    return (
        <Provider value={{cart, user, cantidadTotal, /* getItems, */ addItem, removeItemCart, clear, precioTotal, getUser, getCart}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider}
export default CartProvider