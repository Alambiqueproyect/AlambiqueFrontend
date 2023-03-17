import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modalproduct from './Modalproduct';

const Productcard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <div className="cold-md-4">
        <Modalproduct show={show} handleClose={handleClose} />
            <Card style={{ width: '18rem' }}>
            <Card.Header>Título de poción</Card.Header>
            <Card.Img variant="top" src="src\assets\images\potiondefault.jpg" />
            <Card.Body>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="secondary" onClick={handleShow}>Más detalles</Button>
            </Card.Body>
            </Card>
        </div>
    </>
  );
}

export default Productcard;