import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Project from './components/Projects/Project';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Musa Kamara</title>
                <link rel="canonical" href="Musakamara.com" />
            </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="skills" element={<Skills />} />
           <Route path="contact" element={<Contact />} />
           <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;