import React from 'react';
import Project from './Project'; 
import './styles.css';



function Portfolio() {
  // Sample project data - replace with your actual portfolio projects
  const projects = [
    {
      title: 'SDR Sales Tracker',
      deployedLink: 'https://landonjett.github.io/sdr-sql-tracker/',
      githubLink: 'https://github.com/landonjett/sdr-sql-tracker',
      image: '/public/images/tracker.png'
    },

    {
      title: 'Global Date night Recipe generator',
      deployedLink: 'https://landonjett.github.io/date-night-recipe-generator/',
      githubLink: 'https://github.com/landonjett/date-night-recipe-generator',
    image: '/public/images/recipe.png'
    },

    {
      title: 'Weather Dashboard',
      deployedLink: 'https://landonjett.github.io/weather-dashboard/',
      githubLink: 'https://github.com/landonjett/weather-dashboard',
    image: '/public/images/weather.png' 
    },

    {
      title: 'Javascript Countdown Quiz',
      deployedLink: 'https://landonjett.github.io/js-countdown-quiz/',
      githubLink: 'https://github.com/landonjett/js-countdown-quiz',
    image: '/public/images/quiz.png' 
    },

    {
      title: 'Generate a Password',
      deployedLink: 'https://landonjett.github.io/generate-a-password/',
      githubLink: 'https://github.com/landonjett/generate-a-password',
    image: '/public/images/password.png' 
    },

    {
      title: 'Workout Locker Fitness Tracker',
      deployedLink: 'https://landonj-54fa3a128ea3.herokuapp.com/',
      githubLink: 'https://github.com/landonjett/workout-locker',
    image: '/public/images/tracker.png' 
    },
    // Add more project objects with correct details
  ];

  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-container">
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
