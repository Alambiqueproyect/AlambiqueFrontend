import { useState } from "react";
import "./styles/Register.css";
export const RegisterViewComponent = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(userName);
    }
  return (

    <div className="container">
    <div>
      <img src="src\assets\logoNegro.png"
      alt="Alambique"
      className="image" />
    </div>
    <div>
    
    <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Usuario</label>
            <input value={userName} type="text" placeholder="Nombre de usuario" id="userName" name="userName" />
            <label htmlFor="password">Contraseña</label>
            <input value={password} type="password" placeholder="**********" id="password" name="password" />
            <button>Register</button>
        </form>
        <button  onClick={()=> props.onFormSwitch('login')}>¿Ya tienes cuenta? Login aquí</button>  
        </div>
    </div>
  );
}