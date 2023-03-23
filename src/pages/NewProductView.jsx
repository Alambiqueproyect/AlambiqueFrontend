import React from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewProductForm from "../components/NewProductForm"
import './styles/NewProductView.css'


function NewProductView() {

  

  return (
    <div className="NewProductViewContainer">
    <Navbar/>
    <NewProductForm/>
    <Footer/>
    </div>
  )
}

export default NewProductView
