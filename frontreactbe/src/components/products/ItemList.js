import React from 'react'
import Item from './Item'
import '../../styles.css'

const ItemList = ({items})=> {
        
    return (
        <>
            <div id="itemList">
                {items.length > 0 
                ? items.map(item=>{return <Item key={item._id} item={item}/>})
                : <p>Cargando productos</p>}
            </div>
        </>
    )
}

export default ItemList;