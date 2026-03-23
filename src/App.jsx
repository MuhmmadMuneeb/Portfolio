import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experties from './components/Experties'
import Work from './components/Work'
import Projects from './components/Projects'
import Profile from './components/Profile'
import Footer from './components/Footer'





const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Nav/>
      <Hero/>
      <Experties/>
      <Profile/>
      <Work/>
      <Projects/>
      <Footer/>


  
      
    </div>
  )
}

export default App
