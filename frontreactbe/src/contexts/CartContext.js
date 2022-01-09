import { createContext, useState } from 'react'

const contexto = createContext()
const {Provider} = contexto

const CartProvider = ({children}) => {
    const [user, setUser] = useState('none')
    const [cart, setCart] = useState([])
    const [chat, setChat] = useState(false)
    const [selectedChat, setSelectedChat] = useState(false)

    const getUser = async ()=>{
        const response = await fetch('http://localhost:9000/auth/user', 
                {credentials: 'include'})
        const result = await response.json()
        if (result._id !== user._id) {
            setUser(result)
        }
    }
    
    const addItem = (objetoItem, quantity)=> {
        crearProducto(objetoItem, quantity, isInCart)        
    }
    const crearProducto = (objetoItem, cantidad, callback)=> {
        const subtotal = cantidad * objetoItem.price
        const itemAgregado = {product: objetoItem, quantity: cantidad, subtotal}              
        callback(itemAgregado)
    }
    const isInCart = (prod)=> {
       const existe = cart.find(element => element.product._id === prod.product._id)
        if (!existe) {
            createItem(prod)
        }
        else{alert("El producto ya se encuentra en el carrito.")}
    }    
    const createItem = async(prod)=>{
        const userId = user._id
        const response = await fetch(`http://localhost:9000/carrito/agregar/`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prod,
                userId
            })
        })
        const result = await response.json()
        setCart(result)
    }

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
        if (result.msj === 'success') {
            setCart([])
        } else { alert('Hubo un error!') }
    }

    const getCart = async ()=>{
        const response = await fetch('http://localhost:9000/carrito/listar',
                {credentials: 'include'})
        const result = await response.json()
        if (JSON.stringify(result)!==JSON.stringify(cart)) {
            setCart(result)
        }
    }
        
    const removeItemCart = async (itemId)=> {
        const response = await fetch(`http://localhost:9000/carrito/borrar/${itemId}`, {
            method: 'delete',
            credentials: 'include'
        })
        const result = await response.json()
        setCart(result)
    }

    const updateItemCart = async ({_id, product}, quantity)=>{
        const response = await fetch(`http://localhost:9000/carrito/actualizar/${_id}`, {
            method: 'PATCH',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',                             
            },
            body: JSON.stringify({quantity, subtotal: quantity * product.price})
        })
        const result = await response.json()
        console.log(result)
    }

    const precioTotal = (array)=>{
        return array.reduce((suma, producto)=>suma + producto.subtotal, 0)
    }

    const getUserChat = async ()=>{
        const response = await fetch('http://localhost:9000/chat',
                {credentials: 'include'})
        try {
            const result = await response.json()
            if (JSON.stringify(result)!==JSON.stringify(chat)) {
                setChat(result)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getSelectedChat = async (email)=>{
        const response = await fetch(`http://localhost:9000/chat/${email}`)
        const result = await response.json()
        if(selectedChat === false) {
            setSelectedChat(result.chat)
        }
    }

    const sendMessage = async (email, msg)=>{
        const response = await fetch(`http://localhost:9000/chat`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                msg
            })
        })
        const result = await response.json()
        setChat(result)
        setSelectedChat(result)
    }

    return (
        <Provider value={{cart, user, chat, addItem, removeItemCart, clear, precioTotal, getUser, 
            getCart, updateItemCart, getUserChat, sendMessage, getSelectedChat, selectedChat}}>
            {children}
        </Provider>
    )
}

export {contexto, Provider}
export default CartProvider