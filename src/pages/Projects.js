import React from 'react';
import project1Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import project2Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import project3Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
import project4Image from '/Users/iif/Code/Portfolio/src/assets/filler.jpg';
// import './Projects.scss';

export const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <img src={project1Image} alt="Project 1" className="project__image" />
        <button className="project__button">View</button>
      </div>
      <div className="project">
        <img src={project2Image} alt="Project 2" className="project__image" />
        <button className="project__button">View</button>
      </div>
      <div className="project">
        <img src={project3Image} alt="Project 3" className="project__image" />
        <button className="project__button">View</button>
      </div>
      <div className="project">
        <img src={project4Image} alt="Project 4" className="project__image" />
        <button className="project__button">View</button>
      </div>
    </div>
  );
};
