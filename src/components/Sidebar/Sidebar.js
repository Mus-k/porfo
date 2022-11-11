import './Sidebar.scss';

import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome,faUser,faBars,faClose,faAddressCard,faEye} from '@fortawesome/free-solid-svg-icons';
import {
    faLinkedin,
    faGithub,
    faYoutube,
   
  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ()=>{
  const [showNav, setShowNav] = useState(false);
return (

  
    <div  className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
             <h1 style={{margin:'8px',color:'white'}} className='mk'>M.K</h1>
             
            </Link>

            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink  onClick={() => setShowNav(false)}
                exact='true' activeclassName='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>

                </NavLink>
                <NavLink  onClick={() => setShowNav(false)}
                exact='true' activeclassName='active' className='about-link' to='/skills'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>

                </NavLink>
                <NavLink onClick={() => setShowNav(false)}
                 exact='true' activeclassName='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faAddressCard} color='#4d4d4e'/>

                </NavLink>
                <NavLink onClick={() => setShowNav(false)}
                 exact='true' activeclassName='active' className='project-link' to='/project'>
                <FontAwesomeIcon icon={faEye} color='#4d4d4e'/>
                </NavLink>
                

                <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
            </nav>

            <ul>
            <li>
            <a
            href="https://www.linkedin.com/in/musa-f-kamara-4a73061a3/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          </li>
          <li>
            <a
            href="https://github.com/Mus-k"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          </li>
          <li>
            <a
            href="https://www.youtube.com/channel/UCCIbCJls83uVUxpXNTRtWUw/featured"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
          </li>
      
            </ul>
            <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#ffd700"
          size="3x"
          className='hamburger-icon' />
    </div>
)} 

export default Sidebar