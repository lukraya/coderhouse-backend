import React, { createContext, useContext, useEffect, useState } from 'react'
import io from 'socket.io-client'

const SocketContext = createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ userEmail, children }) {
  const [socket, setSocket] = useState()
  //const [, setUserEmail] = useState('')

  useEffect(() => {
    const newSocket = io(
      'http://localhost:9000'/* ,
      { query: { userEmail } } */
    )
    setSocket(newSocket)

    return () => newSocket.close()
  }, [userEmail])

  /* const getUserEmail = (email)=>{
    setUserEmail(email)
  } */

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  )
}