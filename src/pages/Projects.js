import React from 'react';
import project1Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import project2Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import project3Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import cat from '/Users/iif/Code/Portfolio/src/assets/cat.png';

// const cat = () => {
//   <a href='https://iianti.github.io/'>View</a>
//   console.log("link clicked")
// }

export const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <img src={project2Image} alt="Project 2" className="project__image" />
        <h4>Pong Game</h4>
        <a href='https://github.com/iiAnti/Pong-Game'>
          <button className="project__button">View</button>
        </a>
      </div>
      <div className="project">
        <img src={project3Image} alt="Project 3" className="project__image" />
        <h4>BrightMind</h4>
        <a href='https://github.com/LEARN-JNID/BrightMind'>
          <button className="project__button">View</button>
        </a>
      </div>
      <div className="project">
        <img src={project1Image} alt="Project 4" className="project__image" />
        <h4>Apartment App</h4>
        <a href='https://github.com/learn-academy-2022-charlie/apartment-app-iiAnti'>
          <button className="project__button">View</button>
        </a>
      </div>
      <div className="project">
        <img src={cat} alt="Project 1" className="project__image" />
        <h4>Cat Hunt</h4>
        <a href='https://iianti.github.io/'>
          <button className="project__button">View</button>
        </a>
      </div>
    </div>
  );
};
