import About from '@/components/About'
import BookingForm from '@/components/BookingForm'
import FindUs from '@/components/FindUs'
import Footer from '@/components/Footer'
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
      <BookingForm/>
      <FindUs/>
      <Footer/>
    </div>
    </>
  )
}

export default Home