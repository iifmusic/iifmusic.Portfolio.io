import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.scss'
import Particle from './components/Particle'
import { AboutMe } from './pages/AboutMe'
import Zoom from 'react-reveal/Zoom'
import { Languages } from './pages/Languages'



function App() {
    return (
      <>
        <Particle />    
        <Navbar/>
        <Header />
      <div className='second__area'>
        <Zoom>
          <AboutMe />
        </Zoom>
        <Languages />
      </div>
      
      
        
        
      </>
    )
  }

  export default App