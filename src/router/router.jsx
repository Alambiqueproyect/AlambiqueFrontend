import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";
import LoginView from "../pages/LoginView";
import RegisterView from "../pages/RegisterView";

const Router = () => {

    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<LoginView/>}/>
            <Route path="/register" element={<RegisterView/>}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router