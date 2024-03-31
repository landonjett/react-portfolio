import React from 'react';

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="https://drive.google.com/file/d/1gQEGCBjtApVDT1i2B0vOxgIEoRusn3_e/view?usp=drive_link" download>Download Resume</a>
      <h3>Proficiencies:</h3>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        {/* Add more proficiencies as needed */}
      </ul>
    </div>
  );
}

export default Resume;
