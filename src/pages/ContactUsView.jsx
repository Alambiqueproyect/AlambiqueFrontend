import React from "react";
import './styles/ContactUsView.css';
import ContactUs from "../components/ContactUs"
import Navbar from "../components/Navbar";


function ContactUsView () {

    return(
        <div>

            <Navbar/>
            <div className="ContactUsViewContainer">
            <ContactUs/>
            </div>

        </div>
       
    )
}

export default ContactUsView;