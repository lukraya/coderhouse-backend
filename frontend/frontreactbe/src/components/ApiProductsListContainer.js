import { useEffect, useState } from "react"
import ApiProductsList from "./ApiProductsList"


const ApiProductsListContainer = ()=>{
    const [apiItems, setApiItems] = useState([])

    useEffect(()=>{
        getItems()
    }, [])

    const getItems = async ()=>{
        const response = await fetch('http://localhost:9000/api/productos/listar')
        const result = await response.json()
        //console.log(result)
        setApiItems(result)
    }

    return <ApiProductsList apiItems={apiItems}/>
}

export default ApiProductsListContainer