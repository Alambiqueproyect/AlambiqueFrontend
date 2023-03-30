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
import HomeView from "../pages/HomeView";

const Router = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/home' element={<HomeView/>} />
            <Route path='/newproduct' element={<NewProductView/>} />
            <Route path='/contact' element= {<ContactUsView/>}/>
            <Route path='/events' element= {<EventView/>}/>
            <Route path='/profile' element= {<ProfileView/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router