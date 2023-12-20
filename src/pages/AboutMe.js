import React from 'react';
import image from '/Users/iif/Code/Portfolio/Portfolio/src/assets/cam.JPG';
import { useEffect, useState } from 'react';
import { Flip, Zoom, Fade } from 'react-reveal';
export const AboutMe = () => {



  return (
    <div id='about__me'>
      <Zoom duration={2500} top cascade>
        <h1>About Me</h1>
      </Zoom>
      <Fade delay={2000} duration={4000}>
        <div className='about__inner'>
          <div className='about__para'>
            <p>
              <div id="who"> Who I am </div>
                <br/>
                Hi there, I'm Ivan Ortega. I am a self taught, DIY(do it yourself) enthusiast with a passion for music, code, and everything in between. I have studied many kinds of code languages and I am always asking for a challenge. I thrive in a fast workspace and do so with the least amount of stress and the greatest amount of enthusiasm (also because I don't like when it's slow... I get way too bored). Aside from my coding experience I have worked in the hospitality industry for 11+ years, so I am quite astonishing dealing with ordeals down to the smallest dilemmas. I as well produce my own music. I have released 3+ songs on all the music platforms and am working on many more in the meantime. Having learned and self taught most of these skills, I hope to apply both code and music in all my projects to achieve something unique and stylish. You can checkout my <a href='https://github.com/iiAnti'>Github</a> or my <a href='https://hyperfollow.com/iif'>Music</a>.
                <div className='about__img'>
                  <Flip right delay={4000} duration={1000}>
                    <img src={ image } alt='Ivan image'/>
                  </Flip>
                </div>
            </p>
          </div>
        </div>
        </Fade>
    </div>
  )
}
