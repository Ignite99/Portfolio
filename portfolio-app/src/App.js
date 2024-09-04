import React from 'react';
import "./App.css";
import About from './components/about/About'
import Contact from './components/about/Contact'
import Home from './components/about/Home'
import Portfolio from './components/about/Portfolio'
import Resume from './components/about/Resume'
import Services from './components/about/Services'
import Sidebar from './components/about/Sidebar'
import Testimonials from './components/about/Testimonials'

const App = () => {
  return (
    <>
      <Sidebar />
      <main classname='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
    </>
  )
}

export default App