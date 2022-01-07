import React, { /* useContext, */ useEffect, useState } from 'react'
import ChatCard from './ChatCard'
//import { contexto } from '../../contexts/CartContext'

const Chats = () => {
    //const { getAllChats } = useContext(contexto)
    const [chats, setChats] = useState([])

    useEffect(()=>{
        getAllChats()
    })

    const getAllChats = async ()=>{
        const response = await fetch('http://localhost:9000/chat/listar',
                {credentials: 'include'}) //no necesito las credentials, creo
        const result = await response.json()
        console.log(result)
        setChats(result)
    }

    return (
        <div>
            {chats.length > 0
            ? chats.map(chat=>{return <ChatCard key={chat._id} chat={chat}/>
            })
            : <p>No hay consultas</p>
            }
        </div>
    )
}

export default Chats
