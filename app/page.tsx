import About from '@/components/About/about'
import Contact from '@/components/Contact/contact'
import Hero from '@/components/Hero/hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects/projects'
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  )
}

export default page

