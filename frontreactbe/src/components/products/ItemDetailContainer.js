import React, {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { contexto } from '../../contexts/CartContext'
import '../../styles.css'

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState()
    const {itemId} = useParams()
    const { getCart } = useContext(contexto)

    useEffect(()=>{
        getOneProduct(itemId)
        getCart()
    }, [itemId])
    
    const getOneProduct = async (id)=>{
        const response = await fetch(`http://localhost:9000/productos/${id}`)
        const result = await response.json()
        //console.log(result)
        setItem(result)
    }

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </div>
    )
}

export default ItemDetailContainer;