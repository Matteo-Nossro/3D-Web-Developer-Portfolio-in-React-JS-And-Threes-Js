import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Experience from "./components/Experience.jsx";
import Tech from "./components/Tech.jsx";
import About from "./components/About.jsx";
import Works from "./components/Works.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Contact from "./components/Contact.jsx";
import Stars from "./components/canvas/Stars.jsx";



const App = () => {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar/>
                <Hero/>
            </div>
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            <Feedbacks/>
            <div className="relative z-0">
                <Contact/>
                <Stars/>
            </div>
        </div>
      </BrowserRouter>

  )
}

export default App
