import React from 'react';
import styles from './ProjectCardStyles.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank">
      <div className='imgProjects'>
         <img className="hover" src={src} alt={`${h3} logo`} />
      </div>
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;
