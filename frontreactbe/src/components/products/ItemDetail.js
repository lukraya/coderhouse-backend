import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import { contexto } from '../../CartContext'
import ItemCounter from './ItemCounter'
import '../../styles.css'

const ItemDetail = ({item})=>{
    const [stock,setStock] = useState(item.stock)
    const [count,setCount] = useState(1)
    const [cantItem, setCantItem] = useState()

    const {addItem} = useContext(contexto)

    const onAdd = ()=>{
        //Efectuar cambios en el stock
        handleStock()
        //Mandar la info del item y su cant al contexto
        addItem(item, count)        
    }
    const handleStock = ()=> {
        if(stock>0) {
            setStock(stock-count)
            setCantItem(count)         
        }
    }    

    const onSumar = () => {
        if (count<stock) {
            setCount(count+1)
        }                
    }
    const onRestar = () => {
        if (count>0) {
            setCount(count-1)
        }      
    }

    return (
        <div id="itemDetail">
            <h4>{item.name}</h4>
            <p>Descripción: {item.description}</p>
            <p>Precio: ${item.price}</p>
            <img src={item.thumbnail} alt="Imagen de producto" height="70px" width="70px"></img><br/>
            {cantItem ? 
                <>
                    <button><NavLink to="/carrito">Terminar mi compra</NavLink></button>
                    <button><NavLink to="/">Seguir comprando</NavLink></button>
                </>
                : <ItemCounter onAdd={onAdd} onSumar={onSumar} onRestar={onRestar} count={count}/>
            }
        </div>
    )
}

export default ItemDetail