import About from '@/components/About'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Team from '@/components/Team'
import React from 'react'

const Home = () => {
  return (
    <>
    
    <Navbar/>
    <div className="">
      <Hero/>
      <Services/>
      <About/>
      <Team/>
    </div>
    </>
  )
}

export default Home