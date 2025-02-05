import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Contact from'./components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'



const App = () => {
  return (
    <div className=' bg-gradient-to-r from-bgleft via-bgyello to-bgleft '>
  
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
  
  )
}

export default App