import React from 'react';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <div>
       <p>Download my resume:</p>
       {/* Replace with the actual link to your downloadable resume */}
       <a href="https://drive.google.com/file/d/1gQEGCBjtApVDT1i2B0vOxgIEoRusn3_e/view?usp=drive_link" download>Download Resume</a> 
        <h3>Proficiencies:</h3>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          {/* Add more skills relevant to you */}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
