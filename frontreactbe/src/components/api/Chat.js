import React, { useContext, useState } from 'react'
import { contexto } from '../../contexts/CartContext'
import Message from '../user/Message'

const Chat = ({chat}) => {
    const { sendMessage, user } = useContext(contexto)
    const [text, setText] = useState('')
    const { messages } = chat

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
                {messages.map(msg=>{return <Message key={msg._id} msg={msg}/>})}
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
