import About from '@/components/About/about'
import Contact from '@/components/Contact/contact'
import Hero from '@/components/Hero/hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services/Services';
import InfiniteScroll from '@/components/ui/InfiniteScroll';
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <InfiniteScroll />
      <Services />
      <About />
      <Contact />
    </div>
  )
}

export default page