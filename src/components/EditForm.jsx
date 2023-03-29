import Alert from 'react-bootstrap/Alert';
import { useLoaderData, useParams } from 'react-router-dom';
import { productHandler } from '../handlers/productHandler';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EditForm = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [updatedProduct, setUpdatedProduct] = useState(product[0]);

  
   
    useEffect(() => {
      async function fetchProduct() {
        const productData = await productHandler.loadProduct(id);
        setProduct(productData);
      }
      fetchProduct();
    }, [id]);

    console.log(product)

    const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProduct({
      ...updatedProduct,
      [name]: value,
    });
  };
  console.log(updatedProduct)

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { ...product[0], ...updatedProduct };
    const { id } = product[0];
    console.log(updatedData)
    productHandler.updateProduct(id, updatedData);
  };

  const [showAlert, setShowAlert] = useState(false);

           const handleAddClick = () => {
               setShowAlert(true);
           }
           const handleAlertClose = () => {
               setShowAlert(false);
           }


    return (
      <>

{product.map( p => (

  <Form key={p.id} style={{borderRadius:"0.625rem", border:"2px solid #d63384", height:"80%", width:"80%", marginTop:"10%", marginLeft:"10%", backgroundColor:"rgba(153, 153, 153, 0.7)"}} onSubmit={handleSubmit}>
  <h2 style={{backgroundColor:"rgba(153, 153, 153, 1)", borderRadius:"0.625rem", border:"2px solid #d63384"}} >Editing {p.productName}</h2>
  
  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="id"></Form.Label>
        <Form.Control name='id' type='hidden' defaultValue={p.id}/>
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="productName">Nombre</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="productName" defaultValue={p.productName} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="price">Precio</Form.Label>
        <Form.Control type='number' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="price" defaultValue={p.price} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="description">Descripción</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="description" defaultValue={p.description} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="adverseEffects">Efectos secundarios</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="adverseEffects" defaultValue={p.adverseEffects} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="image">Imagen</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="image" defaultValue={p.image} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="stock">Stock</Form.Label>
        <Form.Control type='number' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="stock" defaultValue={p.stock} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="effectsDuration">Duración</Form.Label>
        <Form.Control type='number' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="effectsDuration" defaultValue={p.effectsDuration} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="productCategory">Category</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="productCategory" defaultValue={p.productCategory} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="ingredients">Ingredientes</Form.Label>
        <Form.Control type='text' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="ingredients" defaultValue={p.ingredients} />
      </Form.Group>

        <Button style={{borderRadius:"0.625rem", border:"2px solid #d63384"}} variant="secondary" type="submit" onClick={handleAddClick}>
        Submit
        </Button>
            </Form>

           ))}     
      </>
    );
  };

  export default EditForm;