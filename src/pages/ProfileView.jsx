import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../components/styles/profileView.css";

function ProfileView() {
  return (

    <div className="pv-container">
      <Navbar />
      <div className="background">
        <div className="photo">
        <img src="src\assets\Ororo.jpg" alt="Ororo" />
      

       
        </div>  
        <h1>hello</h1>
      </div> 
      <Footer />
    </div>
  )
}

export default ProfileView
