import { useState } from "react";
const Register = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userName);
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
            <label htmlFor="userName">usuario</label>
            <input value={userName} type="text" placeholder="Nombre de usuario" id="userName" name="userName" />
            <label htmlFor="password">contraseña</label>
            <input value={password} type="password" placeholder="**********" id="password" name="password" />
            <button>Register</button>
        </form>
        <button  onClick={()=> props.onFormSwitch('login')}>¿Ya tienes cuenta? Log in aquí</button>
    </>
  );
}