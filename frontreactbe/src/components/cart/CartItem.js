import React, {useContext, useState} from 'react'
import { contexto } from '../../CartContext'
import '../../styles.css'

const CartItem = ({item})=> {
    const {quantity, product, subtotal, _id} = item
    const {removeItem} = useContext(contexto)
    const [count, setCount] = useState(quantity)

    const onSumar = () => {
        if (count<product.stock) {
            setCount(count+1)
            updateQuantity(count)
        }                
    }
    const onRestar = () => {
        if (count>1) {
            setCount(count-1)
            updateQuantity(count)
        }      
    }

    const updateQuantity = async (cant)=>{
        fetch(`http://localhost:9000/carrito/actualizar/${_id}`, {
            method: 'patch',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',                             
            },
            body: JSON.stringify({quantity: cant, subtotal: cant * product.price})
        }).then((res)=>{res.headers('Access-Control-Allow-Origin', '*')})
    }
   
    return (
        <div className="productoCart">
            <h4>{product.name}</h4>
            <img src={product.thumbnail} alt={product.name} height="70px" width="70px"></img>
            <p>Precio: ${product.price}</p>
            <p>Cantidad: 
                <button onClick={onRestar} className="controles">-</button>
                {count}
                <button onClick={onSumar} className="controles">+</button>
            </p>
            <p>Subtotal: ${subtotal}</p>
            <button onClick={()=>removeItem(_id)}>Quitar del carrito</button>
        </div>
    )
}

export default CartItem