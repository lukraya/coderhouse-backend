import {useContext, useEffect} from 'react'
import { contexto } from '../../CartContext'

const OrderNew = () => {
    const { clear } = useContext(contexto)

    useEffect(()=>{
        clear()
    })

    return (
        <p>
            Se ha enviado un sms al número registrado confirmando el pedido.
        </p>
    )
}

export default OrderNew
