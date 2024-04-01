// Project.jsx
import React from 'react';

function Project({ title, deployedLink, githubLink, image }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-image" />
      </a>
      <div>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          View Code
        </a>
      </div>
    </div>
  );
}

export default Project;
