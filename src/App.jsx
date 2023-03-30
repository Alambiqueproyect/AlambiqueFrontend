import React from 'react'
import './App.css'
import CarouselElement  from './components/CarouselElement'
import Productlist from './components/ProductList'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import ProductList from './components/ProductList'
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    < div>
      <Productlist/>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
      {/* <Register /> */}
    </div>
  )
}
export default App



