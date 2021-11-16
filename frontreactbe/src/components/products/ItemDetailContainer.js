import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { contexto } from '../../CartContext'
import '../../styles.css'

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState()
    const {itemId} = useParams()
    const { getCart } = useContext(contexto)

    useEffect(()=>{
        getOneProduct(itemId)
        getCart() //Traer cart de la bd antes de agregar para q funcione el chequeo de isInCart
    }, [itemId])
    
    const getOneProduct = async (id)=>{
        const response = await fetch(`http://localhost:9000/productos/${id}`)
        const result = await response.json()
        setItem(result)
    }

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </div>
    )
}

export default ItemDetailContainer;