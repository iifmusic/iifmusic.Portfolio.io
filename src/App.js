import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Particles from 'react-tsparticles'


function App() {
    return (
      <>
      <Particles /> 
        <Navbar/>
        <Header />
      </>
    )
  }

  export default App