import React, {useContext, useState} from 'react'
import { contexto } from '../../CartContext'
import '../../styles.css'

const CartItem = ({item})=> {
    const { quantity, product, subtotal, _id } = item
    const { removeItemCart, updateItemCart } = useContext(contexto)
    const [ count, setCount ] = useState(quantity)

    const onSave = () => {
        updateItemCart(item, count)
    }
    const onSumar = () => {
        if (count<product.stock) {
            setCount(count+1)
        }                
    }
    const onRestar = () => {
        if (count>1) {
            setCount(count-1)
        }      
    }
       
    return (
        <div className="productoCart">
            <h4>{product.name}</h4>
            <img src={product.thumbnail} alt={product.name} height="70px" width="70px"></img>
            <p>Precio: ${product.price}</p>
            <p className="seleccionCant">Cantidad: 
                <button onClick={onRestar} className="controles">-</button>
                {count}
                <button onClick={onSumar} className="controles">+</button>
            </p>
            <button onClick={onSave}>Guardar</button>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={()=>removeItemCart(_id)}>Quitar del carrito</button>
        </div>
    )
}

export default CartItem