import React from 'react'

const Message = ({msg}) => {
    console.log(msg)
    return (
        <div>
            {msg.text}
        </div>
    )
}

export default Message
