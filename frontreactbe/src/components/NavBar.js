import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from './cart/CartWidget'
import { contexto } from '../CartContext'
import '../styles.css'

const NavBar = () => {
    //const [userType, setUserType] = useState('none')
    const {cart, getCart, getUser, user} = useContext(contexto)
        
    useEffect(()=>{
        getUser()
        //getUserType()
        //getItems()
    })

    /* const getUserType = async ()=>{
        const res = await getUser()
        //console.log(res)
        //console.log(res.name)
        //setUserType(res.name)        
    } */

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
                    {/* <li className="categorias"><NavLink to="/carrito">Mi Carrito</NavLink></li> */}
                    {/* {cart.length > 0 ? <CartWidget/> : null} */}
                    <CartWidget/>
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
                    {/* <li className="categorias"><NavLink to="/api/productos">API</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Bebidas">Bebidas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Galletitas">Galletitas</NavLink></li>
                    <li className="categorias"><NavLink to="/category/Alfajores">Alfajores</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;