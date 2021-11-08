import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const {cart, precioTotal, /* clear */} = useContext(contexto)  
  
  return (
    <div className="cart">
      {cart.length > 0 ?
      <>
          {cart.map(item=>{return <CartItem key={item.product._id} item={item}/>})}
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