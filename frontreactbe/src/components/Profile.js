import React, { useContext, useEffect } from 'react'
import { contexto } from '../CartContext'
import '../styles.css'

const Profile = () => {
    const { getUser, user } = useContext(contexto)

    useEffect(()=>{
        getUser()
    })

    return (
        <div>
            <h2>Información de usuario</h2>
            <img src={user.avatar} alt={user.name} height="40px" width="40px"></img> 
            <ul>
                <li><span>Nombre:</span> {user.name}</li>
                <li><span>Edad:</span> {user.age}</li>
                <li><span>Dirección:</span> {user.address}</li>
                <li><span>Celular:</span> {user.cellphone}</li>
                <li><span>Email:</span> {user.email}</li>
            </ul>
        </div>
    )
}

export default Profile
