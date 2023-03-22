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
        <img id="profile-img" src="src\assets\Ororo.png" alt="Ororo" /></div>  
        <div className= "wishlist-box">
          <div className="wishlist">Wishlist</div>
          <div className="wishlist-ico"><img src="src\assets\Star.png" alt="star" /></div>

        <div className="myOrders-box">
          <div className="myOrders">My orders</div>
          <div className="myOrders-ico"> <img src="src\assets\Package.png" alt="package" /></div>
        </div>
          
        <div className="settings-box">
          <div className="settings">Settings</div>
          <div className="settings-ico"> <img src="src\assets\GearSix.png" alt="package" /></div>
        </div>

        <div className="product-box">
        </div>

        </div>

      </div> 
      <Footer />
    </div>
  )
}

export default ProfileView
