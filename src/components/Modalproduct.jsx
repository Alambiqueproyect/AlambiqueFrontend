
import Modal from 'react-bootstrap/Modal';

import { productHandler } from '../handlers/productHandler';


import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';







const Modalproduct = () => {


  const { id } = useParams();
  const [product, setProduct] = useState([]);
 
  useEffect(() => {
    async function fetchProduct() {
      const productData = await productHandler.loadProduct(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  const deleteProduct = async (id) => {
    setProduct(product.filter((p) => p.id !== id));
    await productHandler.deleteProduct(id);
  };

console.log(product)
  let productInfo = product;



  return (

    <>
    {productInfo.map((p) => (
      <div key={p.id}
        className="modal show"
        style={{ display: 'block', position: 'initial', backgroundColor: "rgba(135, 135, 135, 0.5)" }}
      >
        <Modal.Dialog size='lg'>
          <Modal.Header style={{ backgroundColor: "rgba(135, 135, 135)" }}>
            <Modal.Title style={{ backgroundColor: "rgba(135, 135, 135)", color: "white" }}>{p.productName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={p.image} style={{ height: "100%", width: "100%" }} />
          </Modal.Body>

          <Modal.Body>
            <p>{p.category}</p>
          </Modal.Body>

          <Modal.Footer style={{ backgroundColor: "rgba(135, 135, 135)" }}>
            <Link to={`/editProduct/${p.id}`}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Edit</Button></Link>
            <Link to={"/"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Gallery</Button></Link>
            <Link to={"/"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }} onClick={() => deleteProduct(p.id)}>Delete</Button></Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    ))}
  </>
);
}

export default Modalproduct