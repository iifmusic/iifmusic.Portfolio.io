import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Particle from './components/Particle'
import { AboutMe } from './pages/AboutMe'
import Zoom from 'react-reveal/Zoom'



function App() {
    return (
      <>
    
      <Particle />
      <Navbar/>
      <Header />
      <Zoom>
        <AboutMe />
      </Zoom>
      
      
        
        
      </>
    )
  }

  export default App