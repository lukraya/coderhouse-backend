import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../CartContext'
import cartIcon from '../media/cartIcon.jpg'
import '../styles.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(contexto)

    return (
        <NavLink to="/cart" id="cartWidget">
            <img src={cartIcon} alt="Icono de carrito" width="35px" height="35px"></img>
            <div>{cantidadTotal}</div>
        </NavLink>
    )
}

export default CartWidget