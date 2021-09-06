import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import { contexto } from '../CartContext'
import '../styles.css'

const NavBar = () => {
    const {cart, getItems} = useContext(contexto)
    
    useEffect(()=>{
        getItems()
    })
    
    return (
        <nav>
            <NavLink to="/" exact id="brand">Coder Kiosco</NavLink>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><NavLink to="/api/productos">API</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Bebidas">Bebidas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Galletitas">Galletitas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Alfajores">Alfajores</NavLink></li>
                </ul>
                {cart.length > 0 ? <CartWidget/> : null}
            </div>
        </nav>
    )
}

export default NavBar;