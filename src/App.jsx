import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Projects from './Components/Projects/Projects'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App