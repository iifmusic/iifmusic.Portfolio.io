import React from 'react'
import image from '/Users/iif/Code/Portfolio/src/assets/drink.jpeg'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useEffect, useState } from 'react';
export const AboutMe = () => {



  return (
    <div id='about__me'>
      <Zoom>
        <h1>AboutMe</h1>
      </Zoom>
      <Fade>
        <p>
        Who am I? 
        <br/>
        Hi, I am Ivan Ortega. I am a self taught, DIY(do it yourself) enthusiast with a passion for music, code, and everything in between. I have studied many kinds of languages for code and I am always asking for a challenge. I thrive in a fast workspace and do so with the least amount of stress and the greatest amount of enthusiasm. Aside from my coding experience I have worked in the hospitality industry for 11+ years, so I am quite astonishing dealing with ordeals down to the smallest dilemmas. I as well produce my own music. I have released 3+ songs on all the music platforms and am working on many more in the meantime. Having learned and self taught most of these skills, I hope to apply both code and music in all my projects to achieve something unique and stylish. You can checkout my <a href='#'>Github</a> or my <a href='#'>music</a>.
            
              <div className='about__img'>
              <img src={ image } alt= 'Image of Ivan' />
              </div>
            

        </p>
        </Fade>
    </div>
  )
}
