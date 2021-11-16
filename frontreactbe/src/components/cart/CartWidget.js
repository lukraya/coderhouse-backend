import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../CartContext'
import cartIcon from '../../media/cartIcon.jpg'
import '../../styles.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(contexto)

    return (
        <NavLink to="/carrito" id="cartWidget">
            <img src={cartIcon} alt="Icono de carrito" width="35px" height="35px"></img>
            {cantidadTotal ? <div>{cantidadTotal}</div> : null}
        </NavLink>
    )
}

export default CartWidget