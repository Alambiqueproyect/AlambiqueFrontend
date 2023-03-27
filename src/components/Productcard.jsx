import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modalproduct from './Modalproduct';
import { productHandler } from '../handlers/productHandler';
import './styles/Productcardstyle.css'

const Productcard = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
      const data = await productHandler.loadProducts();
      setProducts(data);
    };

    let productList = products

    // const handleDelete = async (id) => {
    //   setProducts(products.filter((p) => p.id !== id));
    //   await productHandler.deleteProduct(id);
    // }

  return (
    <>
        <div className="CardContainer">

        <Modalproduct show={show} handleClose={handleClose} />
        {
          productList.map(p =>(

            <Card style={{ width: '18rem' }} key={p.id}>
            <Card.Header>{p.productName}</Card.Header>
            <Card.Img variant="top" src={p.image} className="imagecard"/>
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

export default Productcard