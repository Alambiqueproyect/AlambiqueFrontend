import React from 'react'
import './App.css'
import CarouselElement  from './components/CarouselElement'
import Productcard from './components/ProductList'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductList from './components/ProductList'

function App() {

  return (

    < div>
      <Navbar/>
      <CarouselElement/>
      <ProductList/>
      <Footer/>
    </div>
    
  )
}

export default App






