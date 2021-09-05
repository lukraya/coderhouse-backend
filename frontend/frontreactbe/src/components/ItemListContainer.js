import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemList from './ItemList'
import '../styles.css'

const ItemListContainer = ({greeting})=>{
    const [items, setItems] = useState({})
    const [prodName, setProdName] = useState()
    const [prodCode, setProdCode] = useState()
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

    const getByName = async (name)=>{
        const response = await fetch(`http://localhost:9000/productos/listar/nombre/${name}`)
        const result = await response.json()
        setItems(result)
    }
    const getByCode = async (code)=>{
        const response = await fetch(`http://localhost:9000/productos/listar/codigo/${code}`)
        const result = await response.json()
        setItems(result)
    }
    const getByStock = async ()=>{
        const response = await fetch(`http://localhost:9000/productos/listar/stock`)
        const result = await response.json()
        setItems(result)
    }
    const getPriceUnder = async ()=>{
        const response = await fetch(`http://localhost:9000/productos/listar/precio/menor`)
        const result = await response.json()
        setItems(result)
    }
    const getPriceOver = async ()=>{
        const response = await fetch(`http://localhost:9000/productos/listar/precio/mayor`)
        const result = await response.json()
        setItems(result)
    }

    return (
        <>
            <h1>{greeting}</h1>
            <input type="text" id="prodName" name="prodName" onInput={e=>setProdName(e.target.value)} placeholder="Nombre del producto"/>
            <button onClick={()=>{getByName(prodName)}}>Buscar</button><br/>
            <input type="text" id="prodCode" name="prodCode" onInput={e=>setProdCode(e.target.value)} placeholder="código"/>
            <button onClick={()=>{getByCode(prodCode)}}>Buscar</button><br/>
            <button onClick={getByStock}>Filtrar por disponible</button><br/>
            <button onClick={getPriceUnder}>Filtrar por precio menor a $60</button><br/>
            <button onClick={getPriceOver}>Filtrar por precio de $60 para arriba</button><br/>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer