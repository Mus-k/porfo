import './Contact.scss';
import React, {  useRef, useState } from 'react';
import Animate from '../AnimatedLetters/Animate';
import emailjs from '@emailjs/browser';

import {
    faSass,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
function Contact() {
    const [letterClass, setLetterClass]=useState('text-animate')
    const refForm = useRef();

    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_90p8m3o', 'template_2nipqdz',
      refForm.current,
      'gFQCFvjKvtwFbTL4s')
      .then(() => {
          alert('Message successfully sent!');
          window.location.reload(false);
      }, () => {
          alert('Failed to send');
      });

    }
    const tel='+905426769301';
  
    return (

    
    <div className='container contact-page'>
    <div className='text-zone'>
       <h1  className={setLetterClass}>
        <Animate letterClass={letterClass}
        strArray={['C','o','n','t','a','c','t',' ', 'm','e']} idx={15}/>
       </h1>
       <p style={{fontSize:'20px'}}>
            I am interested in working for long terms contract. However, if you have any other requests or
            questions, you can contact me using below form or <span style={{color:'yellow'}}>{tel}</span>.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
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

export default Contact