import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { productHandler } from "../handlers/productHandler";

function EditProduct() {
    const { productName } = useLoaderData();
    const id = product.id; const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [img, setImg] = useState(product.img);
    const [stock, setStock] = useState(product.stock);
    const [ingredients, setIngredients] = useState(product.ingredients);
    const [effectsDuration, setEffectsDuration] = useState(product.effectsDuration);
    const [adverseEffects, setAdverseEffects] = useState(product.adverseEffects);
    const [productCategory, setProductCategory] = useState(product.productCategory);


    const handleProductNameChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setProductName(reader.result);
        }
    }
    const handlePriceChange = (event) => {
        let priceInput = event.target.value;
        setPrice(priceInput);
    }

    const handleDescriptionChange = (event) => {
        let descriptionInput = event.target.value;
        setDescription(descriptionInput);
    }

    const handlEffectsDurationChange = (event) => {
        let effectsDurationInput = event.target.value;
        setEffectsDuration(effectsDurationInput);
    }

    const handlAdverseEffectsChange = (event) => {
        let adverseEffectsInput = event.target.value;
        setAdverseEffects(adverseEffectsInput);
    }

    const handleIngredientsChange = (event) => {
        let ingredientsInput = event.target.value;
        setIngredients(ingredientsInput);
    }

    const handleImgChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImg(reader.result);
        };
    };

    const handleTitleChange = (event) => {
        let titleInput = event.target.value;
        setTitle(titleInput);
    };

};
const handlePriceChange = (event) => {
    let priceInput = event.target.value;
    setPrice(priceInput);
};
const handleStockChange = (event) => {
    let stockInput = event.target.value;
    setStock(stockInput);
}

const handleSubmit = (event) => {
    event.preventDefault();
    let updatedProduct = { productName, description, price, img, stock, effectsDuration, ingredients, productCategory, adverseEffects };
    productHandler.updateProduct(id, updatedProduct);
};

return (
    <>

    <div className="EditFormContainer">
        <h1>estás editando el product: {product.title}</h1>
        <form onSubmit={handleSubmit} itemID="form1">
            <h3 id="h3">Edita el producto</h3>
            <div className="mb-3" >
                <div className='AddNewProductcontainer'>
                    <label htmlFor="title" className="form-label">Nombre</label>
                    <input name="title" type="text" className='FormInputContainer' placeholder="Product name" onChange={handleProductNameChange} required />
                </div>
            </div>

            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input name="price" type="number" min="1" className="form-control" placeholder="How much does it cost?" onChange={handlePriceChange} required />
                </div>
            </div>

            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label className="form-label" htmlFor="description">Descripción</label>
                    <input name="description" type="text" className="form-control" id="input-description" required placeholder="Tell us about the product." onChange={handleDescriptionChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label className="form-label" htmlFor="material">Ingredientes</label>
                    <input name="Ingredients" type="text" className="form-control" id="input-ingredients" required placeholder="What Ingredients is it made of?" onChange={handleIngredientsChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label className="form-label" htmlFor="effectsDuration">Duración de los efectos</label>
                    <input name="effectsDuration" type="text" className="form-control" id="input-effectsDuration" required placeholder="Type of EffectsDuration." onChange={handlEffectsDurationChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label className="form-label" htmlFor="productcategory">Categoría</label>
                    <input name="productcategory" type="text" className="form-control" id="input-category" required placeholder="What is the category?" onChange={handlProductCategoryChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label className="form-label" htmlFor="adverseEffects">Efectos Adversos</label>
                    <input name="adverseEffects" type="text" className="form-control" id="input-adverseEffects" required placeholder="What is the AdverseEffects?" onChange={handlAdverseEffectsChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label htmlFor="stock" className="form-label">Stock</label>
                    <input name="stock" type="number" min="1" max="25" className="form-control" required placeholder="How many Stock?" onChange={handleStockChange} />
                </div>
            </div>
            <div className="mb-3">
                <div className='AddNewProductcontainer'>
                    <label htmlFor="img" className="form-label">Imagen</label>
                    <input name="img" type="file" className="form-control" placeholder="Upload a picture" onChange={handleImgChange} required />
                </div>
            </div>
            <button type="submit" className="btn btn-primary" id="btn-ad">Enviar</button>
        </form>
    </div>
  </>
);

export default EditProduct;