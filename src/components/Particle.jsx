import Particles from 'react-tsparticles'
import { loadFull } from "tsparticles"
import React from 'react';

function Particle() {
     const particlesInit = async (main) => {  
          console.log(main);
      
        
          await loadFull(main);
        };
      
        const particlesLoaded = (container) => {
          console.log(container);
        };
  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    style={{
        position: 'absolute',
        zIndex: '1',
        padding: '0.5rem',
        margin: '.25rem'
      }}
    options={{
        "fullScreen": {
            "enable": false,
            "zIndex": 1
        },
        "particles": {
            "number": {
                "value": 90,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00ffdd"
            },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 20,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ff9d00",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            },
            "twinkle": {
                "particles": {
                    "enable": true,
                    "color": "#00ff77",
                    "frequency": 0.05,
                    "opacity": 1
                },
                "lines": {
                    "enable": true,
                    "color": "#ffffff",
                    "frequency": 0.005,
                    "opacity": 1
                }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "background": {
            "color": "rgba()",
            "image": "",
            "position": "50% 50%",
            "repeat": "no-repeat",
            "size": "cover"
        }
    }}
  />
  )
}

export default Particle