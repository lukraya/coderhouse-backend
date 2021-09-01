//import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom'
import './styles.css'
//import CartWidget from './CartWidget';
//import { contexto } from '../CartContext';

const NavBar = () => {
    //const {cart} = useContext(contexto)

    return (
        <nav>
            <NavLink to="/" exact id="brand">Coder Kiosco</NavLink>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><NavLink to="/productos/cargar">Cargar</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Bebidas">Bebidas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Galletitas">Galletitas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Alfajores">Alfajores</NavLink></li>
                </ul>
                {/* {cart.length > 0 ? <CartWidget/> : null} */}
            </div>
        </nav>
    )
}

export default NavBar;