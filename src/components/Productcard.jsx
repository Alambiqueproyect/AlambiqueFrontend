import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modalproduct from './Modalproduct';
import ProductHandler from '../handlers/handlers';

const Productcard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const data = await ProductHandler.loadProducts();
      setProducts(data);
    };

    let productlist = products

  return (
    <>
        <div className="cold-md-4">
          
        <Modalproduct show={show} handleClose={handleClose} />
        {
          productlist.map(p =>(
            <Card style={{ width: '18rem' }} key={p.id}>
            <Card.Header>{p.productName}</Card.Header>
            <Card.Img variant="top" src={p.image} />
            <Card.Body>
                <Card.Text>
               {p.description}
                </Card.Text>
                <Button variant="secondary" onClick={handleShow}>Más detalles</Button>
            </Card.Body>
            </Card>
          ))
          
        }

        </div>
    </>
  );
}

export default Productcard;