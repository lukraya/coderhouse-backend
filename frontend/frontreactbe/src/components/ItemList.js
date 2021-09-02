import React from 'react'
import './styles.css'
import Item from './Item'

const ItemList = ({items})=> {
    //console.log(items)
        
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