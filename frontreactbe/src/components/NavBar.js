import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../CartContext'
import '../styles.css'

const NavBar = () => {
    const { getUser, user, } = useContext(contexto)
        
    useEffect(()=>{
        getUser()
    })

    const renderMenu = ()=>{
        if (user === 'none') {
            return (
                <>
                    <li className="categorias"><NavLink to="/login">Log in</NavLink></li>
                    <li className="categorias"><NavLink to="/signup">Sign up</NavLink></li>
                </>
            )
        } else if (user.name === 'admin') {
            return (
                <>
                    <li className="categorias"><NavLink to="/nuevo-producto">Cargar</NavLink></li>
                    <li className="categorias"><NavLink to="/logout">Log out</NavLink></li>
                </>
            )
        } else {
            return (
                <>
                    <li className="categorias"><NavLink to="/perfil">Mi Perfil</NavLink></li>
                    <li className="categorias"><NavLink to="/carrito">Mi Carrito</NavLink></li>                    
                    <li className="categorias"><NavLink to="/logout">Log out</NavLink></li>
                </>
            )
        }
    }
    
    return (
        <nav>
            <NavLink to="/" exact id="brand">Coder Kiosco</NavLink>
            <div id="menuDerecha">
                <ul id="menu">
                    {renderMenu()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;