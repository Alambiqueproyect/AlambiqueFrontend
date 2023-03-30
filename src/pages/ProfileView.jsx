import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./styles/profileView.css";
import ProfileViewComponent from "../components/ProfileViewComponent";
import Login from "../components/Login";
import Register from "../components/Register";
function ProfileView() {
  return (
    <>
    <Navbar/>
    <ProfileViewComponent/>
    <Footer/>
      </>
  )


}


export default ProfileView
