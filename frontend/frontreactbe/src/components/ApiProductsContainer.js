import { useEffect, useState } from "react"
import ApiProductos from "./ApiProducts"


const ApiProductsContainer = ()=>{
    const [admin, setAdmin] = useState(false)

    useEffect(()=>{
        getAdmin()
    }, [])

    const getAdmin = async ()=>{
        const response = await fetch('http://localhost:9000/api/productos')
        const result = await response.json()
        //console.log(result.admin)
        setAdmin(result.admin)     
    }

    
    return <div>
        {admin ? <ApiProductos/> : <h2>Ingreso no admitido para este usuario</h2>}
    </div>
}

export default ApiProductsContainer