import React from 'react';
import './styles.css'; // Import your CSS file

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="about-me-content">  {/* Added class to parent container */}
        <div className="image-container"> {/* Added a container for the image */}
          <img 
            src="/public/images/pic.jpg" 
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
