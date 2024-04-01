import React from 'react';

function Footer() {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} Landon Jett</p> 
        <div>
          <a href="https://github.com/landonjett" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span style={{ margin: '0 5px' }}>|</span> {/* Add some spacing */}
          <a href="https://www.linkedin.com/in/landon-jett/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span style={{ margin: '0 5px' }}>|</span>
          <a href="https://twitter.com/landoncodes" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
