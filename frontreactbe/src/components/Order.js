//import React, {useState, useEffect} from 'react'
//import { firestore } from '../firebase'

const Order = (orden) => {
    console.log(orden)
    //const [ordenId, setOrdenId] = useState()
    
    //Preparar nueva orden y crear doc en firestore
    /* useEffect(()=>{
        const orders = firestore.collection("orders")
        if (!ordenId) {
            orders.add(orden)
            .then(({id})=>{
                setOrdenId(id)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    },[ordenId, orden]) */

    
    return (<>
        <p>Orden</p>
        {/* <div className="orden">{ordenId ?
            <>
                <p>Orden de compra número: {ordenId}</p>                    
                <p>Gracias por su compra!</p>
            </>
            :
            <><p>Generando su orden</p></>
        }</div> */}</>
    )
}

export default Order