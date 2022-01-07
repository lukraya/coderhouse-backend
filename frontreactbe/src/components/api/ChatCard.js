import React, { useState } from 'react'
import Chat from './Chat'

const ChatCard = ({chat}) => {
    const [selectedChat, setSelectedChat] = useState(null)

    const selectChat = ()=>{
        setSelectedChat(chat.email)
    }

    return (
        <div>
            {selectedChat ?
            <Chat chat={chat} /> : 
            <h4 onClick={selectChat}>{chat.email}</h4>
            }
        </div>
    )
}

export default ChatCard
