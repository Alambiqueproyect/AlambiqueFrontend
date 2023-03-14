import React from "react";
import {
    BrowserRouter,
    
    Routes,
    Route
  } from "react-router-dom";
  import NewProductView from "../pages/NewProductView";
  import App from "../App";

const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/newproduct' element={<NewProductView/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router