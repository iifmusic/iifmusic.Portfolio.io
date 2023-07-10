import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.scss'
import Particle from './components/Particle'
import { AboutMe } from './pages/AboutMe'
import { Fade } from  'react-reveal'
import { Languages } from './pages/Languages'
import { Certification } from './pages/Certification'
import { Contact } from './pages/Contact'
import { Projects } from './pages/Projects'
import { Footer } from './components/Footer'



function App() {
    return (
      <>
        <Navbar />
        <div>
          <Fade duration={7000}>
          </Fade>
            <Particle />
        </div>

          <Header />
        <div className='second__area'>
          <AboutMe />
          <Languages />
        </div>
        <Projects />
        <Certification />
        <Contact />
        <Footer />
      </>
    )
  }

  export default App