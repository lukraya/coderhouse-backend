import '../../styles.css'

const LoginForm = () => {
    return (
        <form id="formulario" action="http://localhost:9000/auth/login" method="POST">
            <div>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email" required/><br/>
                <label for="password">Contraseña: </label>
                <input type="password" name="password" id="password" required/><br/>
            </div>
            <button type="submit">Log In</button><br/>
            <button><a href="/signup">Registrarse</a></button>
        </form>
    )
}

export default LoginForm
