import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const [items,setItems] = useState([])
  const {cart, precioTotal, /* clear */ getCart } = useContext(contexto)

  useEffect(()=>{
    getCartItems()
  })

  const getCartItems = async ()=>{
    const res = await getCart()
    console.log(res)
    setItems(res)
    //Recarga infinita
  }
  
  return (
    <div className="cart">
      {items.length > 0 ?
      <>
          {items.map(item=>{return <CartItem key={item.product._id} item={item}/>})}
          <p>Total: ${precioTotal()}</p>
          {/* <button onClick={clear} className="botonCart">Vaciar el carrito</button>
          <button><NavLink to="/checkout" className="botonCart">Comprar</NavLink></button> */}
      </>
      : <>
          <p>Su carrito está vacío.</p>
          <button><NavLink to="/">Ir a la tienda</NavLink></button>
        </>}
    </div>
  )
}

export default Cart