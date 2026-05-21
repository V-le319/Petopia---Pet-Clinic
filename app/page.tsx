import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="main_container">
      <Hero/>
      <Services/>
    </div>
    </>
  )
}

export default Home