import React, { useContext, /* useEffect, */ } from 'react'
import { contexto } from '../../contexts/CartContext'
import Message from './Message'

const UserChat = () => {
    const { chat, /* getUserChat, */ sendMessage, user } = useContext(contexto)
    //const array = chat.chat
    let text = ''

    /* useEffect(()=>{
        getUserChat()
    }) */
    
    function handleSubmit(e) {
        e.preventDefault()
        
        const newMessage = {
            date: new Date().toLocaleString(), 
            sender: user.email === 'tiroalpanda@gmail.com' ? 'admin' : user.email,
            recipient: user.email === 'tiroalpanda@gmail.com' ? user.email : 'admin',
            text,
        }

        sendMessage(user.email, newMessage)
        text = ''
    }
    
    return (
        <div>
            <div>
                {chat 
                ? chat.map(msg=>{return <Message key={msg._id} msg={msg}/>})
                : null
                }
            </div>
            <form onSubmit={handleSubmit}>
                <textarea 
                id='texto'
                required
                name='texto'
                defaultValue={text}
                onChange={e => text = e.target.value}
                style={{resize: 'none'}}
                /><br/>
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default UserChat
