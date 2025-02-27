import React from 'react'
import Person from './Person/page'
import About from './About/page'
import Contact from './Contact/page'
import Projects from './Projects/page'
import Services from './Services_page/page'
const Structure = () => {
  return (
    <div className='overflow-x-hidden'>
        <Person/>
        <About/>
        <Contact/>
        <Services/>
        <Projects/>
        
    </div>
  )
}

export default Structure