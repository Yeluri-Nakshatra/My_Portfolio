import React from 'react'
import { BrowserRouter as Router, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import AboutMe from './components/aboutme/AboutMe'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
function ScrollToSectionOnRouteChange() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.slice(1); // get "projects" from "/projects"
    if (section) {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
        offset: -300,
      });
    }
  }, [location]);

  return null;
}

const App = () => {
  
 
  return (
    <Router>
      <ScrollToSectionOnRouteChange />
    <div className='bg-gradient-to-r from-[#090920] to-[#0d0d2b] min-h-screen max-w-screen overflow-x-hidden flex justify-center'>
      <Navbar/>
      <div className=''>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      </div>
    </div>
    </Router>
  )
}

export default App