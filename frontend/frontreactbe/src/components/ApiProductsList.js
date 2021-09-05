import ApiProductItem from "./ApiProductItem"


const ApiProductsList = ({apiItems})=>{

    const deleteProduct = (id)=>{
        //console.log(`delete ${id}`)
        fetch(`http://localhost:9000/api/productos/borrar/${id}`, {
            method: 'delete'
        })
    }

    return (
        <div>
            {apiItems.length > 0 
            ? <ul>
                {apiItems.map(apiItem=>{
                    return <ApiProductItem key={apiItem._id} apiItem={apiItem} deleteProduct={deleteProduct}/>
                })}
            </ul>
            : <p>Error: no se encontraron productos.</p>
        }
        </div>
    )
}

export default ApiProductsList