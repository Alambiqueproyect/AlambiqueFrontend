import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../components/styles/NewProductForm.css'


function NewProductForm() {


  return (
    <div className='FormContainer'>
    <Form>
        <h3 id='h3'>AÑADE UN NUEVO PRODUCTO</h3>
      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Nuevo producto</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Añade un producto nuevo"/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Categoría</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Pociones, saumerios, cristales, tarot..."/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Ingredientes</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Describe aqui los ingredientes"/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Descripción</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Añade una breve descripción del producto"/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Duración</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Añade la duración de tu producto"/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Contraindicaciones</Form.Label>
        <Form.Control className='FormInputContainer' type="text" placeholder="Añade los efectos adversos"/>
        </div>
      </Form.Group>

      <Form.Group  className="mb-3" controlId="formBasicEmail">
        <div className='AddNewProductcontainer'>
        <Form.Label>Imagen</Form.Label>
        <Form.Control className='FormInputContainer' type="file" placeholder="Añade una imagen"/>
        </div>
      </Form.Group>

      <Button variant="primary" type="submit">
        Crear
      </Button>
    </Form>
    </div>
  );
}

export default NewProductForm;