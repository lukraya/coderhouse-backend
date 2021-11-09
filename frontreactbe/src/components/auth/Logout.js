import React, { useEffect } from 'react'

const Logout = () => {

    useEffect(()=>{
        logout()
    })

    const logout = async ()=>{
        try {
            const response = await fetch('http://localhost:9000/auth/logout', 
                {credentials: 'include'})
            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h2>Hasta luego!</h2>
            <button><a href="/">Volver</a></button>
        </>
    )
}

export default Logout
