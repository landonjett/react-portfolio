import React from 'react';
import Project from './Project';

function Portfolio() {
  // Example project data - Replace with your actual data
  const projects = [
    {
      title: 'Project 1',
      deployedLink: 'https://your-deployed-project1.com', 
      githubLink: 'https://github.com/your-username/project1',
      image: '/project1.jpg' // Assumes 'project1.jpg' is in your 'public' folder
    },
    // Add more project objects with correct details
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-container"> {/* Add a container for styling */}
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
