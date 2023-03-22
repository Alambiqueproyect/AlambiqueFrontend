import React from "react";
import {
    BrowserRouter,
    
    Routes,
    Route
  } from "react-router-dom";
  import NewProductView from "../pages/NewProductView";
  import App from "../App";
  import EventsView from "../pages/EventsView";

const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/newproduct' element={<NewProductView/>} />
            <Route path='/eventos' element={<EventsView/>} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router