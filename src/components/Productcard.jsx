import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modalproduct from './Modalproduct';
import { productHandler } from '../handlers/productHandler';
import './styles/Productcardstyle.css'
import { Form } from "react-bootstrap";
import "./styles/Product.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    

  console.log({ searchValue });

  useEffect(() => {
    getData();
  }, []);

    
  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      let matchSearchValue = product.productName
        .toLowerCase()
        .includes(searchValue);
      let matchCheckboxValue = true;

      if (searchValues.length > 0) {
        matchCheckboxValue = searchValues.includes(product.productCategory);
      }
      if (searchValues.length === 0) {
        return matchSearchValue;
      } else {
        return matchSearchValue && matchCheckboxValue;
      }
    });

    setFilteredProducts(filteredProducts);
  }, [products, searchValue, searchValues]);

  const getData = async () => {
    const data = await productHandler.loadProducts();
    setProducts(data);
  };
 
  const handleCheckBox = (event) => {
    let searchInput = event.target.value;

    const isChecked = event.target.checked;

    if (isChecked) {
      setSearchValues([...searchValues, searchInput]);
    } else {
      setSearchValues(searchValues.filter((val) => val !== searchInput));
    }
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };

  console.log({ filteredProducts });

  if (searchValues.length !== 0 || searchValue.length !== 0) {
    return (
      <>
        <Form className="d-flex" >
          <Form.Control
            onChange={handleSearch}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            id='searchInput'
          />
          <Button className="btn">
           Search
          </Button>          
        </Form>

        <div className="Container1">
          <div className="filtro">
            <p>MOSTRAR</p>
          </div>

          <div className="filtro">
            <label className="label">Pociones</label>
            <input
              className=" input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Poción"
            />
          </div>

          <div className="filtro">
            <label className="label">Saumerios</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Saumerios"
            />
          </div>
          <div className="filtro">
            <label className="label">Otros</label>
            <input
              className=" input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Otros"
            />
          </div>
        </div>
        <div cclassName="CardContainer">
          
            <Modalproduct show={show} handleClose={handleClose} />
            {filteredProducts.map((item) => (
               <Card style={{ width: '18rem' }} key={item.id} id="card">
               <Card.Header id="itemTittle">{item.productName}</Card.Header>
               <Card.Img variant="top" src={item.image} className="imagecard"/>
               <Card.Body>
                   <Card.Text>
                  {item.description}
                   </Card.Text>
                   <Button variant="secondary" onClick={handleShow}>Más detalles</Button>
               </Card.Body>
               </Card>
            ))}
          
        </div>
      </>
    );
  } else
    return (
      <>
      <Form className="d-flex">
          <Form.Control
            onChange={handleSearch}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />

          <Button bg="dark" variant="dark">
            Search
          </Button>
        </Form>

        <div className="Container2">
          <div className="filtro">
            <p className="mostrar">MOSTRAR</p>
          </div>

          <div className="filtro">
            <label label="label">Pociones</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Poción"
            />
          </div>

          <div className="filtro">
            <label className="label">Saumerios</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Saumeríos"
            />
          </div>
          <div className="filtro">
            <label label="label">Otros</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Otros"
            />
          </div>
        </div>
        <div className="CardContainer">
        <Modalproduct show={show} handleClose={handleClose} />
          {products.map((item) => (
             <Card style={{ width: '18rem' }} key={item.id} id="card">
             <Card.Header id="itemTittle">{item.productName}</Card.Header>
             <Card.Img variant="top" src={item.image} className="imagecard"/>
             <Card.Body>
                 <Card.Text>
                {item.description}
                 </Card.Text>
                 <Button variant="secondary" onClick={handleShow}>Más detalles</Button>
             </Card.Body>
             </Card>
          ))}
        </div>
      </>
    );
}
