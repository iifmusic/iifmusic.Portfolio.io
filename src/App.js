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



function App() {
    return (
      <>
      <div>
        <Fade duration={7000}>  
          <Navbar />
        </Fade>
          <Particle />
      </div>

        <Header />
      <div className='second__area'>
        <AboutMe />
        <Languages />
      </div>
      <Certification />
        
      </>
    )
  }

  export default App