import {NavLink} from 'react-router-dom'

const ApiProducts = ()=>{

    return <div>
       <NavLink to="/api/productos/cargar">Cargar nuevo producto</NavLink><br></br>
       <NavLink to="/api/productos/listar">Editar producto</NavLink>
    </div>
}

export default ApiProducts