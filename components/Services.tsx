import React from 'react'

const Services = () => {
  return (
    <>
    <section id="services" className="w-full h-full bg-mainBG  p-6  sm:py-24 ">
      <div className="max-w-6xl mx-auto">
      
      <div className="w-full flex flex-col justify-start items-start gap-6">
        <h1 className="heading">Our Services</h1>
        <p className="content_text">Everything your pet needs, all in one place. From routine visits to emergency care, we've got them covered.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className='grid-card'></div>
        <div className='grid-card'></div>
        <div className='grid-card'></div>
        <div className='grid-card'></div>
        <div className='grid-card'></div>
        <div className='grid-card'></div>

      </div>
    </div>

    </section>
    </>
  )
}

export default Services