import React from 'react'
import './App.css'
import CarouselElement  from './components/CarouselElement'
import Productcard from './components/Productcard'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (

    < div>
      <Navbar/>
      <CarouselElement/>
      <Productcard/>
      <Footer/>
    </div>
    
  )
}

export default App






