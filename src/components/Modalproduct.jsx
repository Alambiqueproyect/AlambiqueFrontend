import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { productHandler } from '../handlers/productHandler';
import { useParams} from 'react-router';





const Modalproduct = ({ show, handleClose,}) => {

  const { id } = useParams();
  const [product, setProduct] = useState("");
 
  useEffect(() => {
    async function fetchProduct() {
      const productData = await productHandler.loadProduct(id);
      setProduct(productData);
    }
    fetchProduct();
  }, [id]);

  // const deleteImage = async (id) => {
  //   setImage(image.filter((i) => i.id !== id));
  //   await ImageHandler.deleteImage(id);
  // };

console.log(product)
  let productInfo = product;



  return (
    <>
    {/* {
      
      productInfo.map((p) =>( */}

        <Modal show={show} onHide={handleClose} size="lg">


      <Modal.Header closeButton>
        <Modal.Title id="ProductTitle" key={productInfo.id}> {productInfo.productName}  </Modal.Title> 
        </Modal.Header>
        <Modal.Body>
                  <Card className="text-center" style={{ width: '90%'}} border="light">
                        <Card.Img variant="top" src="src\assets\images\potiondefault.jpg" />
                        <Card.Body>
                          <Card.Text>
                           <p>  {productInfo.description}  </p>
                           <Table striped bordered hover>
                              <tbody>
                                <tr>
                                  <td><strong>Editorial</strong></td>
                                  <td>Editorial</td>
                                </tr>
                                <tr>
                                  <td><strong>Categoría</strong></td>
                                  <td>categoría</td>
                                </tr>
                                <tr>
                                  <th><strong>Difficulty</strong></th>
                                  <th>dificulty</th>
                                </tr>
                              
                              
                                <tr>
                                  <td><strong>Average game-time</strong></td>
                                  <td>time</td>
                                </tr>
                                <tr>
                                  <td><strong>Max number of players</strong></td>
                                  <td>numer of players</td>
                                </tr>
                                <tr>
                                  <td><strong>Recommended age</strong></td>
                                  <td> years </td>
                                </tr>
                                <tr>
                                  <td><strong>Available units in stock</strong></td>
                                  <td> unit/s </td>
                                </tr>
                              </tbody>
                            </Table>
                          </Card.Text>
                        </Card.Body>
                  </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>

      {/* ))
    } */}
    </>
  )

    
      
}

export default Modalproduct;