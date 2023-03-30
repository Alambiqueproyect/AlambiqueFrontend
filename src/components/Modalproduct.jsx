import Modal from 'react-bootstrap/Modal';
import { productHandler } from '../handlers/productHandler';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./styles/modalProduct.css"
import { Table } from 'react-bootstrap';







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
        className="modal show" id='modalShowContainer'
        style={{ display: 'block', position: 'initial', 
        // backgroundColor: "rgba(135, 135, 135, 0.5)" 
      }}
      >
        <Modal.Dialog  size='lg'>
          <Modal.Header style={{ backgroundColor: "rgb(103,11,9) " }}>
            <Modal.Title className='modalTittle' style={{ backgroundColor: "rgb(103,11,9)", color: "white" }}>{p.productName} - {p.price}€</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id='imgContainer'><img src={p.image} style={{ height: "100%", width: "100%" }} /></div>
            <p className='descriptionContainer'>{p.description}</p>
            
            <Table striped bordered hover className='tableContainer'>
                              <tbody>
                                <tr>
                                  <td><strong>Categoría</strong></td>
                                  <td>{p.productCategory}</td>
                                </tr>
                                <tr>
                                  <td><strong>Ingredientes</strong></td>
                                  <td>{p.ingredients}</td>
                                </tr>
                                <tr>
                                  <th><strong>Duración de los efectos</strong></th>
                                  <th>{p.effectsDuration} horas</th>
                                </tr>
                                <tr>
                                  <td><strong>Efectos Adversos</strong></td>
                                  <td>{p.adverseEffects}</td>
                                </tr>
                              </tbody>
                            </Table>
          
          </Modal.Body>
          
          <Modal.Footer style={{ backgroundColor: "rgb(103,11,9)" }}>
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