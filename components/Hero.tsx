
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="w-screen h-full flex bg-mainBG/30 justify-center items-start flex-col px-10 sm:px-16 py-10 pt-12 sm:pt-16 gap-6 sm:py-20 ">
      
    <div id="hero" className="max-w-6xl mx-auto grid grid-cols-1 items-start sm:grid-cols-2 gap-12">
      <div className="content flex flex-col gap-6">
        <div className="bg-tagHover p-2 w-fit rounded-full text-center px-4 text-sm">
          <p className="text-smallTag">Trusted by local families!</p>
        </div>
        <h1 className="heading sm:text-6xl leading-relaxed ">Your Pet's Health, 
          <br/>Our Priority</h1>
        <p className='content_text'>Trusted care for dogs, cats, and everything in between. From routine checkups to vaccinations, our team is here to keep your pets healthy and happy.
          <br/>Easy booking, happy pets.</p>
        <Link href="/#booking" className="button-reversed w-fit">Book appointment with us</Link>
      </div>
    

    <div className="w-full h-[400px] sm:h-[500px] relative">
      <Image src="/images/360_F_335129835_9hAvCOWfyEYZxOHW1lD3w8E1Ai2rBgdB.jpg"
      alt="happy pet"
      fill
      className=" rounded-2xl object-cover drop-shadow-sm"/>
      
    </div>

    </div>
    </section>
    </>
  )
}

export default Hero