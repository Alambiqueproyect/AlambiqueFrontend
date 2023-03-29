import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./styles/profileView.css";
import ProfileViewComponent from "../components/ProfileViewComponent";
import ProfileProductContainer from "../components/ProfileProductContiner";

function ProfileView() {
  return (
    <>
    <Navbar/>
    <div id="componentsContainer">
    <ProfileViewComponent/>
    <ProfileProductContainer/>
    </div>
    <Footer/>
      </>
  )


}


export default ProfileView
