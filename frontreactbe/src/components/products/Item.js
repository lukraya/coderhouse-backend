import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {contexto} from '../../CartContext'
import '../../styles.css'

const Item = ({item})=> {
    const {user} = useContext(contexto)

    const renderLink = ()=>{
        if (user.name === 'admin') {
            return <NavLink to={`actualizar/${item._id}`}>Editar</NavLink>
        } else if ((user !== 'none') && (user.name)) {
            return <NavLink to={`/${item._id}`}>Ver detalle</NavLink>
        }
    }
    
    return (
        <div className="item">
            <img src={item.thumbnail} alt={item.name} height="70px" width="70px"></img>
            <p className="itemP">{item.name}</p>
            <p className="itemP">${item.price}</p>
            <p className="itemP">Código: {item.code}</p>
            <div>
                {renderLink()}
            </div>
        </div>
    )
}

export default Item;