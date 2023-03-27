import { useState } from 'react';
import { productHandler} from '../handlers/productHandler'
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import '../components/styles/NewProductForm.css'


const CreateProduct = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [stock, setStock] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [effectsDuration, setEffectsDuration] = useState("");
  const [adverseEffects, setAdverseEffects] = useState("");
  const [productCategory, setProductCategory] = useState("");


  const handleProductNameChange = (event) => {
    let productNameInput = event.target.value;
    setProductName(productNameInput);
  };
  const handlePriceChange = (event) => {
    let priceInput = event.target.value;
    setPrice(priceInput);
  };
  const handleDescriptionChange = (event) => {
    let descriptionInput = event.target.value;
    setDescription(descriptionInput);
  };
  const handleIngredientsChange = (event) => {
    let ingredientsInput = event.target.value;
    setIngredients(ingredientsInput);
  };
  const handlEffectsDurationChange = (event) => {
    let effectsDurationInput = event.target.value;
    setEffectsDuration(effectsDurationInput);
  };
  const handlProductCategoryChange = (event) => {
    let productCategoryInput = event.target.value;
    setProductCategory(productCategoryInput);
  };
  const handlAdverseEffectsChange = (event) => {
    let adverseEffectsInput = event.target.value;
    setAdverseEffects(adverseEffectsInput);
  };
  const handleImgChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result)
    };
  };
  const handleStockChange = (event) => {
    let stockInput = event.target.value;
    setStock(stockInput);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let newProduct = { productName, description, price, img, stock, effectsDuration, ingredients, productCategory, adverseEffects };
    productHandler.addProduct(newProduct);
    event.target.reset()
  };
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <>
    
    <div className="FormContainer">
      
      <form onSubmit={handleSubmit} itemID="form1">
        <h3 id="h3">Crea un nuevo producto</h3>
        <div className="mb-3" >
          <div className='AddNewProductcontainer'>
            <label htmlFor="title" className="form-label">Nombre</label>
            <input name="title" type="text" className='FormInputContainer' placeholder="Nombre de tu producto" onChange={handleProductNameChange} required />
          </div>
          </div>

        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label htmlFor="price" className="form-label">Precio</label>
            <input name="price" type="number" min="1" className='FormInputContainer' placeholder="¿Cuánto cuesta tu producto?" onChange={handlePriceChange} required />
          </div>
        </div>

        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label className="form-label" htmlFor="description">Descripción</label>
            <input name="description" type="text" className='FormInputContainer' id="input-description" required placeholder="Escribe una breve descripción de tu producto." onChange={handleDescriptionChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label className="form-label" htmlFor="material">Ingredientes</label>
            <input name="Ingredients" type="text" className='FormInputContainer' id="input-ingredients" required placeholder="Escribe aquí los ingredientes de tu producto" onChange={handleIngredientsChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label className="form-label" htmlFor="effectsDuration">Duración de los efectos</label>
            <input name="effectsDuration" type="text" className='FormInputContainer' id="input-effectsDuration" required placeholder="Escribe aqui la duración de la poción" onChange={handlEffectsDurationChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label className="form-label" htmlFor="productcategory">Categoría</label>
            <input name="productcategory" type="text" className='FormInputContainer' id="input-category" required placeholder="Pociones, Saumerios o Velas" onChange={handlProductCategoryChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label className="form-label" htmlFor="adverseEffects">Efectos Adversos</label>
            <input name="adverseEffects" type="text" className='FormInputContainer' id="input-adverseEffects" required placeholder="¿Cuales son los efectos adversos?" onChange={handlAdverseEffectsChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label htmlFor="stock" className="form-label">Stock</label>
            <input name="stock" type="number" min="1" max="25" className='FormInputContainer' required placeholder="¿Cuanto stock tienes de este" onChange={handleStockChange} />
          </div>
        </div>
        <div className="mb-3">
          <div className='AddNewProductcontainer'>
            <label htmlFor="img" className="form-label">Imagen</label>
            <input name="img" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgChange} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" id="btn-ad" >Enviar</button>
      </form>
    </div>
  </>
  );
};
export default CreateProduct;
