import React, { useState } from "react";
import {Link} from "react-router-dom"
import { Button, Form } from "react-bootstrap";
import "./styles/login.css"

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
    setUsername("");
    setPassword("");

  };

  return (
    < div className="container">
        <h1 className="login">Iniciar Sesión</h1>
    <Form 
     onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label className="label">Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label className="label">Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    <p className="register">
      ¿No tienes cuenta? <Link to="/register">Registro</Link>
    </p>
      </div>
  );
};

export default LoginForm;
