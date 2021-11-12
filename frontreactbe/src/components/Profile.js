import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../CartContext'
import '../styles.css'

const Profile = () => {
    const [userData, setUserData] = useState({})
    const { getUser } = useContext(contexto)

    useEffect(()=>{
        getUserData()
    })

    const getUserData = async ()=>{
        const res = await getUser()
        console.log(`res en perfil, name ${res.name}`)
        if (!userData.name) {
            console.log(`seteo la info`)
            setUserData(res)
        } else {
            console.log(`ya tengo la info`)
        }
        //Solución imperfecta (carga unas 2 veces)
    }

    return (
        <div>
            <h2>Información de usuario</h2>
            <img src={userData.avatar} alt={userData.name} height="40px" width="40px"></img> 
            <ul>
                <li><span>Nombre:</span> {userData.name}</li>
                <li><span>Edad:</span> {userData.age}</li>
                <li><span>Dirección:</span> {userData.address}</li>
                <li><span>Celular:</span> {userData.cellphone}</li>
                <li><span>Email:</span> {userData.email}</li>
            </ul>
        </div>
    )
}

export default Profile
