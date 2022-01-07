import React, { useContext, useEffect, /* useState */ } from 'react'
import { contexto } from '../../contexts/CartContext'
import Message from './Message'
//import { Form, InputGroup, Button } from 'react-bootstrap'

const Chat = () => {
    const { chat, getUserChat, sendMessage, user } = useContext(contexto)
    //const [text, setText] = useState('')
    let text = ''
    //console.log(chat.chat) //this happens twice, empty, and twice more not empty
    //1.Metodo para traer el chat de este usuario
    //2.Metodo para enviar un mensaje nuevo

    useEffect(()=>{
        getUserChat()
    })
    
    /* function getText(e) {
        e.preventDefault()
        text = e.target.value
    } */

    function handleSubmit(e) {
        e.preventDefault()
        
        const newMessage = {
            date: new Date().toLocaleString(), //hopefully FyH
            sender: user.email === 'tiroalpanda@gmail.com' ? 'admin' : user.email,
            recipient: user.email === 'tiroalpanda@gmail.com' ? user.email : 'admin',
            text,
        }

        sendMessage(user._id, newMessage)
        //setText('')
        text = ''
    }
    
    return (
        <div>
            <div>
                {chat 
                ? chat.chat.map(msg=>{return <Message key={msg._id} msg={msg}/>})
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

export default Chat
