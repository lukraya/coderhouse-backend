import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../../contexts/CartContext'
import Message from './Message'
//import { Form, InputGroup, Button } from 'react-bootstrap'

const Chat = () => {
    const { chat, getUserChat, sendMessage, user } = useContext(contexto)
    const [text, setText] = useState('')
    //1.Metodo para traer el chat de este usuario
    //2.Metodo para enviar un mensaje nuevo

    useEffect(()=>{
        getUserChat()
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        
        const newMessage = {
            date: new Date().toLocaleString(), //hopefully FyH
            sender: user.email === 'tiroalpanda@gmail.com' ? 'admin' : user.email,
            recipient: user.email === 'tiroalpanda@gmail.com' ? user.email : 'admin',
            text,
        }

        sendMessage(user._id, newMessage)
        setText('')
    }
    
    return (
        <div>
            <div>
                {chat.length > 0 
                ? chat.map(msg=>{return <Message key={msg._id} msg={msg}/>})
                : null
                }
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                id='texto'
                required
                name='texto'
                value={text}
                onChange={e => setText(e.target.value)}
                style={{resize: 'none'}}
                /><br/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Chat
