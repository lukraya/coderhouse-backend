import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../CartContext'
import CartItem from './CartItem'

const Cart = () => {
  const [items,setItems] = useState([])
  const {cart, precioTotal, /* clear */ /* getCart */ } = useContext(contexto)

  useEffect(()=>{
    console.log(cart)
    //getCartItems()
  })

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
    <div className="cart">
      {items.length > 0 ?
      <>
          {items.map(item=>{return <CartItem key={item.product._id} item={item}/>})}
          <p>Total: ${precioTotal(items)}</p>
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