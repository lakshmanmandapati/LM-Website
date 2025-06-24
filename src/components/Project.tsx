import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/Object_Detector" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/Object_Detector" target="_blank" rel="noreferrer"><h2>Object detection</h2></a>
                <p>Developed a real-time object detection system using YOLOv8 and OpenCV for accurate and efficient visual recognition.</p>
            </div>
            <div className="project">
                <a href="https://github.com/lakshmanmandapati/plantvillage" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/lakshmanmandapati/plantvillage" target="_blank" rel="noreferrer"><h2>PlantDisease Detector </h2></a>
                <p>Built a Plant Disease Detection system using Neural Networks for early and accurate crop health diagnosis</p>
            </div>
            <div className="project">
                <a href="https://lakshmanmandapati.github.io/pricingcards-toggle/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lakshmanmandapati.github.io/pricingcards-toggle/" target="_blank" rel="noreferrer"><h2>PriceToggle Template </h2></a>
                <p>Designed a responsive Price Toggle landing page using React and Tailwind CSS for seamless user interaction and modern UI</p>
            </div>
            <div className="project">
                <a href="https://lakshmanmandapati.github.io/Simon_Game/" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://lakshmanmandapati.github.io/Simon_Game/" target="_blank" rel="noreferrer"><h2>Simon Game</h2></a>
                <p>Developed a classic Simon Game using HTML, CSS, and JavaScript for interactive memory-based gameplay.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;