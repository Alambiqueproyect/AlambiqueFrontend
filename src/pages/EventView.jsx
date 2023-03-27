import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import EventCard from "../components/EventCard"
import "./styles/EventsView.css"


function EventView() {

  return (
    <>
    <Navbar/>
    <h1>¡Acompañanos! ¡Ven a uno de nuestros eventos!</h1>
    <EventCard/>
    <Footer/>
    </>

  )
}

export default EventView
