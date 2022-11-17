import React from 'react';
import './Project.scss';



function Project() {
  return (
    <div className='project-container proje'>

    <h1>Projects</h1>
            <div className='box-container'>
                        <div className='box-1 box'>
                             <h2>English Test project with JavaScript</h2>
                             <div className='text-1 innerText'>
                                <p>I build a user friendly English test app,
                                 That allows a user to take a test and gives result instantly.
                                 <a href='https://github.com/Mus-k'> click here to see the project.</a>
                                </p>
                             </div>
                        </div>
                        <div className='box-2 box'>
                              <h2>Fetching data with javascript</h2>
                              <div className='text-1 innerText'>
                                <p> Fetching data online was one of my favorite project. it turned out great.
                                 <a href='https://github.com/Mus-k'> click here to see the project.</a>
                                </p>
                             </div>
                        </div>
                        <div className='box-3 box'>
                             <h2>Food ordering app buil with React.js</h2>

                             <div className='text-1 innerText'>
                                <p>building a responsive app with react.js, 
                                and a well design mobile responsive app was a great experience.
                                 <a href='https://github.com/Mus-k'> click here to see the project. </a>
                                </p>
                             </div>
                        </div>
            </div>
   </div>
  )
}

export default Project