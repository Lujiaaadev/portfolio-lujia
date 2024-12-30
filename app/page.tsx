import About from '@/components/About/about'
import Contact from '@/components/Contact/contact'
import Hero from '@/components/Hero/hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects/projects';
import Services from '@/components/Services/Services';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default page