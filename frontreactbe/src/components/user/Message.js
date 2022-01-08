import React from 'react'

const Message = ({msg}) => {
    //console.log(msg)
    return (
        <div>
            <p>{msg.sender}: {msg.text}</p>
        </div>
    )
}

export default Message