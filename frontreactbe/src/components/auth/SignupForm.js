import '../../styles.css'

const SignupForm = () => {
    return (
        <form id="formulario" action="http://localhost:9000/auth/signup" method="POST">
            <div>
                <label htmlFor="name">Nombre de usuario: </label>
                <input type="text" name="name" id="name"/><br/>

                <label htmlFor="address">Dirección: </label>
                <input type="text" name="address" id="address"/><br/>

                <label htmlFor="age">Edad: </label>
                <input type="text" name="age" id="age"/><br/>

                <label htmlFor="cellphone">Celular: </label>
                <input type="text" name="cellphone" id="cellphone"/><br/>

                {/* Temporal como type=text */}
                <label htmlFor="avatar">Imagen de perfil: </label>
                <input type="text" name="avatar" id="avatar"/><br/>

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" required/><br/>

                <label htmlFor="password">Constraseña: </label>
                <input type="password" name="password" id="password" required/><br/>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    )
}

export default SignupForm
