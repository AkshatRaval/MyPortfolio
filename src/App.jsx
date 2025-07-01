import React from 'react'
import Navigation from './Sections/Navigation'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contacts from './Sections/Contacts'


const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      {/* navbar */}

      <Navigation />

      {/* hero */}

      <Hero />

      {/* about */}

      <About />

      {/* Skills */}

      <Skills />

      {/* projects */}

      <Projects />

      {/* contact */}

      <Contacts />
      {/* footer */}
    </div>
  )
}

export default App