import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./styles/register.css"

{/*const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
*/}
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}, ConfirmPassword:${confirmpassword}`);
    setUsername("");
    setPassword("");
    setConfirmPassword("");

  };
  return (
    <div className="container">
      <h1 className="register">Registro</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label className="label">Correo Electrónico:</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Ingresa tu email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>
        
        <Form.Group controlId="formPassword">
          <Form.Label className="label">Contraseña:</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Ingresa tu contraseña" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label className="label">Confirmar contraseña:</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Confirma tu contraseña" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </Form.Group>

        <Button className="register-button" variant="dark" type="submit">
          Registrarse
        </Button>
      </Form>
    </div>
  );
};

export default Register;