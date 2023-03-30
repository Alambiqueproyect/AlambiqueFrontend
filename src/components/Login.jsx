import { useState } from "react";
const Login = (props) => {
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(user);
}
    return (
      <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">usuario</label>
            <input value={userName} type="text" placeholder="Nombre de usuario" id="userName" name="userName" />
            <label htmlFor="password">contraseña</label>
            <input value={password} type="password" placeholder="**********" id="password" name="password" />
            <button>Log in</button>
        </form>
            <button onClick={()=> props.onFormSwitch('register')}>Regístrate aquí si no tienes cuenta</button>
      </>
    );
  }
  export default Login;