import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Chats = () => {
    const [chats, setChats] = useState([])

    useEffect(()=>{
        getAllChats()
    })

    const getAllChats = async ()=>{
        const response = await fetch('http://localhost:9000/chat/listar',
                {credentials: 'include'}) //no necesito las credentials, creo
        const result = await response.json()
        console.log(result)
        if (JSON.stringify(result)!==JSON.stringify(chats)) {
            setChats(result)
        }
    }

    return (
        <div>
            {chats.length > 0
            ? chats.map(chat=>{return <h4 key={chat._id}><NavLink to={`/chatlist/${chat.email}`}>{chat.email}</NavLink></h4>
            })
            : <p>No hay consultas</p>
            }
        </div>
    )
}

export default Chats
