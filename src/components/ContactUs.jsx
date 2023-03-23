import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './styles/contactUs.css'
import './styles/reset.css'

function ContactUs() {

  return (
    <div className = "ContactUs">
    <div className="FormContainer">
      <Form>
        <h3 id="h3">Contacta con Nosotros</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Introduzca su Nombre"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Introduzca su Correo Electronico"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Móvil</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Introduzca su Móvil"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <div className="Contactcontainer">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              className="FormInputContainer"
              as="textarea"
              rows={3}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
    </div>
  );
}
export default ContactUs;
