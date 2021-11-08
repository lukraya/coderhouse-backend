import '../../styles.css'

const CreateProductForm = ()=>{
    
    return(                
        <form id="formulario" action="http://localhost:9000/api/productos/agregar" method="POST">
            <label htmlFor="name">Nombre: </label>
            <input type="text" id="name" name="name" placeholder="producto 1"/><br/>
            <label htmlFor="price">Precio: </label>
            <input type="text" id="price" name="price" placeholder="100"/><br/>
            <label htmlFor="thumbnail">Url: </label>        
            <input type="text" id="thumbnail" name="thumbnail" placeholder="url1"/><br/>
            <label htmlFor="stock">Stock: </label>
            <input type="text" id="stock" name="stock" placeholder="10"/><br/>
            <label htmlFor="description">Descripción: </label>
            <input type="text" id="description" name="description" placeholder="descripción del producto"/><br/>
            <label htmlFor="code">Código: </label>
            <input type="text" id="code" name="code" placeholder="AAA1"/><br/>
            <label htmlFor="category">Categoría: </label>
            <input type="text" id="category" name="category" placeholder="categoría"/><br/>
            <button type="submit">Enviar</button>
        </form>        
    )
}

export default CreateProductForm