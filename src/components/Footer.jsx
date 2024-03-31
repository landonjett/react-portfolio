import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
        <div>
          <a href="https://github.com/landonjett" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/landon-jett/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {/* Add links to other platforms as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
