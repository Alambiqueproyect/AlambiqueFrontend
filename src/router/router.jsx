import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import NewProductView from "../pages/NewProductView";
import App from "../App";
import ContactUsView from "../pages/ContactUsView";
import EventView from "../pages/EventView";
import ProfileView from "../pages/ProfileView";
import DetailView from "../pages/DetailView";
import { productHandler } from "../handlers/productHandler";
import EditView from "../pages/EditView";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/newproduct' element={<NewProductView />} />
                <Route path='/contact' element={<ContactUsView />} />
                <Route path='/events' element={<EventView />} />
                <Route path='/profile' element={<ProfileView />} />
                <Route path='/detailView/:id' element={<DetailView />} loader={fetchProduct} />
                <Route path='/editProduct/:id' element={<EditView />} loader={fetchProduct} />
            </Routes>
        </BrowserRouter>
    )
}

async function fetchProduct({ params }) {
    const product = await productHandler.loadProduct(params.id);
    return { product };
}
export default Router