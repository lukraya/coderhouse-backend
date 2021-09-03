import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import '../styles.css'

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState({})
    const {categoryId} = useParams()

    useEffect(()=>{
        if(categoryId) {
            getByCategory(categoryId)
        } else {
            getProducts()
        }
    }, [categoryId])

    const getByCategory = async (id)=>{
        const response = await fetch(`http://localhost:9000/productos/listar/cateogry/${id}`)
        const result = await response.json()
        //console.log(id)
        setItems(result)
    }

    const getProducts = async ()=>{
        const response = await fetch("http://localhost:9000/productos/listar")
        const result = await response.json()
        //console.log(result)
        setItems(result)    
    }

    return (
        <>
            <h1>{greeting}</h1>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer