import {useEffect, useState} from 'react'

const ItemListContainer = ({greeting})=>{
    const [resultFetch, setResultFetch] = useState({})

    useEffect(()=>{
        requestFetch()
    }, [])

    const requestFetch = async ()=>{
    const response = await fetch("http://localhost:9000/productos/listar")
    const result = await response.json()
    console.log(result)
    setResultFetch(result)
    //console.log(resultFetch)
    }

    return (
        <>
            <h1>{greeting}</h1>
            <p>{resultFetch[0].name}</p>
        </>
    )
}

export default ItemListContainer