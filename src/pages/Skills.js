import React from 'react'
import { Flip, Zoom, Fade } from 'react-reveal';

export const Skills = () => {
  return (
    <>
      <h2 className='skills'>Skills</h2>
      <div className='languages__container'>
        
          <div className='front__end'>
            <h3>Front-End</h3>
            <Fade delay={1000} duration={2000}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
            </Fade>
            <Fade delay={1500} duration={2000}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="Ruby" />
            </Fade>
            <Fade delay={2000} duration={2000}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
            </Fade>
            <Fade delay={2500} duration={2000}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="Redux" />
            </Fade>
            <Fade delay={3000} duration={2000}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
            </Fade>
          </div>
       

        <div className='styling'>
        <h3 id="color-changing-heading">Styling</h3>
        <Fade delay={1000} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
          </Fade>
          <Fade delay={1500} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="Tailwind CSS" />
          </Fade>
          <Fade delay={2000} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass" />
          </Fade>
          <Fade delay={2500} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="Bootstrap" />
          </Fade>
        </div>

        <div className='back__end'>
          <h3>Back-End</h3>
          <Fade delay={1000} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="PostgreSQL" />
          </Fade>
          <Fade delay={1500} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg" alt="Ruby on Rails" />
          </Fade>
        </div>

        <div className='holder'>
          <h3>Extras</h3>
          <Fade delay={1000} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original-wordmark.svg" alt="Yarn" />
          </Fade>
          <Fade delay={1500} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" alt="Git" />
          </Fade>
          <Fade delay={2000} duration={2000}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" alt="Apple" />
          </Fade>
          <Fade delay={2500} duration={2000}> 
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"  alt='Windows'/>
          </Fade>
        </div>
      </div>
    </>
  );
};
