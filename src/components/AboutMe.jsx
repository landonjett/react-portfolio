import React from 'react';
import './styles.css'; 

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about-me-content">
        <div className="image-container"> 
          <img 
            src="/images/pic.jpg" // Updated path
            alt="Landon Jett" 
            className="profile-image" 
          /> 
        </div>
        <p>
          Software sales Account Executive turned Full-Stack Software Engineer. 
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
