import { useState } from "react";
import "../components/styles/Login.css";
import { Link } from "react-router-dom";
const Login = (props) => {
const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(user);
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
        <input value={userName}
        type="text"
        placeholder="Nombre de usuario"
        id="userName"
        name="userName"
        />
        <label htmlFor="password">Contraseña</label>
        <input value={password}
        type="password"
        placeholder="**********"
        id="password"
        name="password"
         />
        <button><Link to="/home">Login</Link></button>
     </form>
        <button onClick={()=> props.onFormSwitch('register')}>
          Regístrate aquí si no tienes cuenta
        </button>
      </div>
  </div>
);
}
export default Login;