import React from 'react';
import './pro.css';

const projects = [
  {
    title: 'Tic Tac Toe Game',
    image:  './tic.png',
    description: 'A simple Tic Tac Toe game built with React.js during my internship at Prodigy Infotech.',
    tags: ['React.js', 'CSS']
  },
  {
    title: 'Food Ordering Portal',
    image: './food.png',
    description: 'A food ordering portal project showcasing my skills in front-end development.',
    tags: ['React.js', 'CSS', 'HTML']
  }
];

export default function Project() {
  return (
    <div className='projects-container'>
      {projects.map((project, index) => (
        <div key={index} className='project-card'>
          <img src={project.image} alt={project.title} className='project-image'/>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className='tags'>
            {project.tags.map((tag, i) => (
              <span key={i} className='tag'>{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
