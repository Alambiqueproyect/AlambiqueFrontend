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

const Router = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/newproduct' element={<NewProductView/>} />
            <Route path='/contact' element= {<ContactUsView/>}/>
            <Route path='/eventos' element= {<EventView/>}/>
            <Route path='/profile' element= {<ProfileView/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router