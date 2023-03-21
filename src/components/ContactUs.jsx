import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './styles/contactUs.css'

function ContactUs() {

  return (
    <div className="FormContainer">
      <Form>
        <h3 id="h3">Contact With Us</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Add Name"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Add Email"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div className="Contactcontainer">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              className="FormInputContainer"
              type="text"
              placeholder="Add Phone"
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <div className="Contactcontainer">
            <Form.Label>Message</Form.Label>
            <Form.Control
              className="FormInputContainer"
              as="textarea"
              rows={3}
            />
          </div>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default ContactUs;
