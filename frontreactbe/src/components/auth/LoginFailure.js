import React from 'react'

const LoginFailure = () => {
    return (
        <>
            <h4>Error al identificarse</h4>
            <button><a href="/login">Reintentar</a></button>
            <button><a href="/signup">Registrarse</a></button>
        </>
    )
}

export default LoginFailure
