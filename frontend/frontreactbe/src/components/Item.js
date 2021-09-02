import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Item = ({item})=> {
    
    return (
        <div className="item">
            <img src={item.thumbnail} alt={item.name} height="70px" width="70px"></img>
            <p className="itemP">{item.name} ${item.price}</p>
            <div>
                <NavLink to={`/item/${item._id}`}>Ver detalle</NavLink>
            </div>
        </div>
    )
}

export default Item;