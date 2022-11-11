import React from 'react'
import Animate from '../AnimatedLetters/Animate'
import './Skills.scss';

import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  return (
  
     <div className="container about-page">
        <div className="text-zone skill">
          <h1>
            <Animate
              // letterClass={letterClass}
              strArray={['M', 'y', ' ', 'S', 'k','i', 'l', 'l','s']}
              idx={15}
            />
          </h1>
          <p style={{fontSize:'20px'}}>
            I'm a very ambitious front-end developer looking for job.
          </p>
          <p align="LEFT" style={{fontSize:'20px'}}>
            My knowledge includes <span style={{color:'yellow', fontSize:'22px'}}>
              HTML5, CSS3, JavaScript, React, Sass, Bootstrap and Git.
            </span>
          </p>
          <p style={{fontSize:'20px'}}>
            I build responsive website, mobile-first web design, and I put special effort into optimizing my code and providing the best user experience.
          </p>
        </div>

        <div className="stage-cube-cont">
        
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#ff99cc" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
        
</div>
  )
}

export default Skills