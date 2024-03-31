import React from 'react';

function Project({ title, deployedLink, githubLink, image }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} />
      <p>Deployed Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a></p>
      <p>GitHub Repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a></p>
    </div>
  );
}

export default Project;
