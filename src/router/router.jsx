import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
  import NewProductView from "../pages/NewProductView";
  import ContactUsView from "../pages/ContactUsView";
  import App from "../App";

const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/newproduct' element={<NewProductView/>} />
             <Route path='/contact' element={<ContactUsView/>} />

        </Routes>
    </BrowserRouter>
    )
}

export default Router