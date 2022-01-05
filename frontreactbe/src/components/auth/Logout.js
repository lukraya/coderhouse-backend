import React, { useEffect, useState } from 'react'

const Logout = () => {
    const [success, setSuccess] = useState()

    useEffect(()=>{
        logout()
    })

    const logout = async ()=>{
        try {
            const response = await fetch('http://localhost:9000/auth/logout', 
                {credentials: 'include'})
            const result = await response.json()
            //console.log(result)
            if (result.msj === 'success') {
                setSuccess(true)
            } else {
                setSuccess(false)
                console.log(result.error)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            { 
                success  ?
                <>
                    <h2>Hasta luego!</h2>
                    <button><a href="/">Volver</a></button>
                </>
                : <>
                    <h3>¡Hubo un error!</h3>
                    <button><a href='/logout'>Reintentar</a></button>
                </>
            }
        </>
    )
}

export default Logout
