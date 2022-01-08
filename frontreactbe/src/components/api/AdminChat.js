import React, { useContext, useEffect, } from 'react'
import { useParams } from 'react-router-dom'
import { contexto } from '../../contexts/CartContext'
import Message from '../user/Message'


const AdminChat = () => {
    const { getSelectedChat, selectedChat, sendMessage, user } = useContext(contexto)
    const { email } = useParams()
    let text = ''

    useEffect(()=>{
        getSelectedChat(email)
    }, [email, getSelectedChat])

    
    function handleSubmit(e) {
        e.preventDefault()
        
        const newMessage = {
            date: new Date().toLocaleString(),
            sender: user.email === 'tiroalpanda@gmail.com' ? 'admin' : user.email,
            recipient: user.email === 'tiroalpanda@gmail.com' ? user.email : 'admin',
            text,
        }

        sendMessage(email, newMessage)
        text = ''
    }

    return (
        <div>
            <div>
                {selectedChat
                ? selectedChat.map(msg=>{return <Message key={msg._id} msg={msg}/>})
                : null}
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

export default AdminChat
