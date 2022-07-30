import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Particles from 'react-tsparticles'
// import { loadFull } from "tsparticles";

function App() {

    // const particlesInit = async (main) => {
    //   console.log(main);
  
    //   // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    //   // starting from v2 you can add only the features you need reducing the bundle size
    //   await loadFull(main);
    // };
  
    // const particlesLoaded = (container) => {
    //   console.log(container);
    // };
    return (
      <>
       <Particles 
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true, 
                value_area: 900
              }
            }
          }
        }}
       />
        <Navbar/>
        <Header />
      </>
    )
  }

  export default App