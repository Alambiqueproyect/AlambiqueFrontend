import React from 'react';
import './styles/HomeView.css';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';
import CarouselElement from '../components/CarouselElement';
import Footer from '../components/Footer';



function App() {

    return (

        < div>
            <Navbar />
            <CarouselElement />
            <ProductList />
            <Footer />
        </div>

    )
}

export default App






