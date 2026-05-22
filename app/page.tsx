import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="main_container">
      <Hero/>
      <Reviews/>
      <Services/>
    </div>
    </>
  )
}

export default Home