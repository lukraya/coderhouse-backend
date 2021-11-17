import React, { useContext, useEffect, useState } from 'react'
import { contexto } from '../CartContext'
import '../styles.css'

const Profile = () => {
    //const [userData, setUserData] = useState({})
    const { getUser, user } = useContext(contexto)

    useEffect(()=>{
        //getUserData()
        getUser()
    })

    /* const getUserData = async ()=>{
        const res = await getUser()
        console.log(`res en perfil, name ${res.name}`)
        if (!userData.name) {
            console.log(`seteo la info`)
            setUserData(res)
        } else {
            console.log(`ya tengo la info`)
        }
        //Solución imperfecta (carga unas 2 veces)
    } */

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
