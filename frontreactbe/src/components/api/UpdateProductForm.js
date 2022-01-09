import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Redirect } from 'react-router-dom'

const UpdateProductForm = () => {    
    const {itemId} = useParams()
    const [redirect, setRedirect] = useState(null)
    const [item, setItem] = useState(
        {
            name: "",
            price: undefined,
            thumbnail: "",
            stock: undefined,
            description: "",
            code: "",
            category: ""
        }
    )

    useEffect(()=>{
        getProduct(itemId)
        .then((obj)=>{
            setItem(obj)
        })
    }, [itemId])

    const getProduct = async (id)=>{
        const response = await fetch(`http://localhost:9000/productos/${id}`)
        const result = await response.json()
        return result
    }

    const deleteProduct = async (id)=>{
        const response = await fetch(`http://localhost:9000/api/productos/borrar/${id}`, {
            method: 'delete',
        })
        const result = await response.json()
        if (result.msj === 'Producto eliminado') {
            setRedirect('/')
        }
    }

    return (
        <>
        {redirect ? <Redirect to={redirect} /> :
            <>
            <form id="formulario" action={`http://localhost:9000/api/productos/actualizar/${itemId}`} method="POST">
                <label htmlFor="name">Nombre: </label>
                <input type="text" id="name" name="name" defaultValue={item.name} placeholder="producto 1"/><br/>
                <label htmlFor="price">Precio: </label>
                <input type="text" id="price" name="price" defaultValue={item.price} placeholder="100"/><br/>
                <label htmlFor="thumbnail">Url: </label>        
                <input type="text" id="thumbnail" name="thumbnail" defaultValue={item.thumbnail} placeholder="url1"/><br/>
                <label htmlFor="stock">Stock: </label>
                <input type="text" id="stock" name="stock" defaultValue={item.stock} placeholder="10"/><br/>
                <label htmlFor="description">Descripción: </label>
                <input type="text" id="description" name="description" defaultValue={item.description} placeholder="descripción del producto"/><br/>
                <label htmlFor="code">Código: </label>
                <input type="text" id="code" name="code" defaultValue={item.code} placeholder="AAA1"/><br/>
                <label htmlFor="category">Categoría: </label>
                <input type="text" id="category" name="category" defaultValue={item.category} placeholder="categoría"/><br/>
                <button type="submit">Enviar</button>
            </form>
            <button onClick={()=>{deleteProduct(itemId)}}>Eliminar</button>
            </>
        }
        </>
    )
}

export default UpdateProductForm
