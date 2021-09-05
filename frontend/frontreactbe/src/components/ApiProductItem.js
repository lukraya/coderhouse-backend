import { NavLink } from "react-router-dom"


const ApiProductItem = ({apiItem, deleteProduct}) => {
    return (
        <li>
            <span>{apiItem.name}
                <button><NavLink to={`/api/productos/actualizar/${apiItem._id}`}>Actualizar</NavLink></button>
                <button onClick={()=>deleteProduct(apiItem._id)}>X</button>
            </span>
        </li>
    )
}

export default ApiProductItem