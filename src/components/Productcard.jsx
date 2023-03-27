import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import Modalproduct from "./Modalproduct";
import ProductHandler from "../handlers/handlers";
import { Form } from "react-bootstrap";
import "./styles/Product.css";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

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
    const data = await ProductHandler.loadProducts();
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
        <Form className="d-flex">
          <Form.Control
            onChange={handleSearch}
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
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
            <label className="label">Amor</label>
            <input
              className=" input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Amor"
            />
          </div>

          <div className="filtro">
            <label className="label">Tech Skills</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="TechSkills"
            />
          </div>
        </div>
        <div className="block--search-container">
          {filteredProducts.map((item) => (
            <div>{item.productName}</div>
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
            <label label="label">Amor</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="Amor"
            />
          </div>

          <div className="filtro">
            <label className="label">Tech Skills</label>
            <input
              className="input"
              type="checkbox"
              onChange={handleCheckBox}
              value="TechSkills"
            />
          </div>
        </div>
        <div className="block--search-container">
          {products.map((item) => (
            <div>{item.productName}</div>
          ))}
        </div>
      </>
    );
}
