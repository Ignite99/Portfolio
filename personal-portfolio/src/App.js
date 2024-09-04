import React from 'react';
import "./App.css";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Experience from './components/experience/Experience'
import Sidebar from './components/sidebar/Sidebar'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Experience />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App