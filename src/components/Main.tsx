import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://res.cloudinary.com/douyafnuf/image/upload/v1750726413/lakshman_rtcdlj.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/lakshmanmandapati" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lakshman-mandapati-679236241/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Lakshman Mandapati</h1>
          <p>AI Generalist</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/lakshmanmandapati" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/lakshman-mandapati-679236241/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;