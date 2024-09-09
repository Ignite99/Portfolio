import React from 'react';
import "./App.css";
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import Sidebar from './components/sidebar/Sidebar'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <main className='flex'>
      <Sidebar />
      <Home />
      <About />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  )
}

export default App