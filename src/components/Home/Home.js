import { useState } from 'react';
import { Link } from "react-router-dom";
import Animate from "../AnimatedLetters/Animate";
import './Home.scss';

const Home = () => {
     const [letterClass, setLetterClass]=useState('text-animate')
     const nameArray=['','M','u','s','a']
     const jobArray=['W','e','b',' ', 'd','e','v','e','l','o','p','e','r','.'];

   
    return (  
    <div className="container home-page">
           <div className="text-zone">
                    <h1 className={setLetterClass}>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br/>
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14 `}>'m </span> 
                    
                    <Animate letterClass={letterClass}
                        strArray={nameArray} 
                        idx={15}
                    />
                    <br/>
                    <Animate letterClass={letterClass}
                        strArray={jobArray} 
                        idx={22}
                    /></h1>

                    <h2>Frontend Developer</h2>
                    <Link to='/contact' className="flat-button">CONTACT ME </Link>
             </div>

                    <div className='name'>M<br/>K</div>
    </div>);
}
 
export default Home;