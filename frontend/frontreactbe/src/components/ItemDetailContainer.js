import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import '../styles.css'

const ItemDetailContainer = ()=> {
    const [item,setItem] = useState()
    const {itemId} = useParams()

    useEffect(()=>{
        getOneProduct(itemId)
    }, [itemId])
    
    const getOneProduct = async (id)=>{
        const response = await fetch(`http://localhost:9000/productos/listar/${id}`)
        const result = await response.json()
        //console.log(id)
        setItem(result)
    }

    return (
        <div>
            {item ? <ItemDetail item={item}/> : <p>Cargando detalles</p>}
        </div>
    )
}

export default ItemDetailContainer;