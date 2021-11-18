import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { contexto } from '../../CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const {cart, precioTotal, clear, getCart, user } = useContext(contexto)
  const [redirect, setRedirect] = useState(null)
  //const [items,setItems] = useState([])

  useEffect(()=>{
    getCart()
  })

  const createOrder = async (items, userData)=>{
    const order = {
      from: {
        name: userData.name,
        email: userData.email,
        phone: userData.cellphone
      },
      total: precioTotal(items),
      products: items
    }

    const response = await fetch('http://localhost:9000/carrito/orden', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ order })
    })
    //console.log(response)
    const result = await response.json()
    if (result.msj === 'Alertas enviadas.') {
      setRedirect('/checkout')
    }
  }

  /* const getCartItems = async ()=>{
    const res = await getCart()
    //console.log(JSON.stringify(res))
    console.log(items)
    if (items.length === 0) {
      console.log(`items estaba vacío`)
      setItems(res)
    } else if (JSON.stringify(res) !== JSON.stringify(items)) {
      console.log(`diferencia entre res e items`)
      setItems(res)
    } else {
      console.log(`ya tenía estos items`)
    }
    //Solución no perfecta, pero ya no se recarga infinitamente
  } */
  
  return (
    <>
    {redirect ? <Redirect to={redirect}/> :
      <div className="cart">
        {cart.length > 0 ?
        <>
            {cart.map(item=>{return <CartItem key={item.product._id} item={item}/>})}
            <p>Total: ${precioTotal(cart)}</p>
            <button onClick={clear} className="botonCart">Vaciar el carrito</button>
            <button onClick={()=>{createOrder(cart, user)}}>{/* <NavLink to="/checkout" className="botonCart"> */}Comprar{/* </NavLink> */}</button>
        </>
        : <>
            <p>Su carrito está vacío.</p>
            <button><NavLink to="/">Ir a la tienda</NavLink></button>
        </>}
      </div>
    }
    </>
  )
}

export default Cart