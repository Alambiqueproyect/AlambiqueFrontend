import React from "react"
<<<<<<< HEAD
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

=======
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../components/styles/profileView.css";
>>>>>>> feature/ProfileView

function ProfileView() {
  return (
<<<<<<< HEAD
    <div>
      <Navbar />
      <h1>THIS IS A PROFILE</h1>
=======

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
>>>>>>> feature/ProfileView
      <Footer />
    </div>
  )


}


export default ProfileView
