import { NavLink } from 'react-router-dom'
import ItemListContainer from './ItemListContainer'
import './styles.css'

const ApiProductos = ()=>{

    return(
        <>
            <h3>ApiProductos</h3>
            <ul id="menu">
                <li className="categorias"><NavLink to="/productos/api/cargar">Cargar</NavLink></li>
                <li className="categorias"><NavLink to="/productos/api/actualizar">Bebidas</NavLink></li>
                <li className="categorias"><NavLink to="/productos/api/borrar">Galletitas</NavLink></li>
            </ul>
            <ItemListContainer/>
        </>
    )
}

export default ApiProductos