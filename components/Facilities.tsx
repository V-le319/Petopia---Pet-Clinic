'use client'
import React from 'react'

const Facilities = () => {
    const facilities = [
        {
            title: "Reception & Lobby",
            image: "/images/Modern Waiting Area.png",
            span: "col-span-1 row-span-2"
        },
        {
            title: "Recovery Ward",
            image: "/images/boarding.jpg",
            span: "col-span-1"
        },
        {
            title: "Grooming Suite",
            image: "/images/IMG_0877-1024x683.jpg",
            span: "col-span-1"
        },
        {
            title: "Exam Room",
            image: "/images/South-Coast_Exam-room-2-scaled.jpeg",
            span: "col-span-1"
        },
        {
            title: "Lab & Diagnostics",
            image: "/images/Modern Laboratory Scene.png",
            span: "col-span-1"
        },
        {
            title: "Emergency & Surgery",
            image: "/images/Modern Operating Room.png",
            span: "col-span-3 row-span-1"
        },
        
    ]
  return (
    <>
    <section id="facilities" className="w-full h-full bg-mainBG/30 mb-8 px-10 py-10 gap-6 sm:py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
        
        <div className="mb-8">
            <span className="inline-block text-xs tracking-widest uppercase bg-tagHover text-smallTag font-normal px-3 py-1 rounded-full mb-4">
            Our Facilities
            </span>
            <h2 className="subheading">A space built for care</h2>
            <p className="content_text">Every corner of our clinic is designed with your pet's comfort in mind — clean, calm, and fully equipped for everything from routine visits to complex procedures.</p>
        </div>

        <div className="w-full grid grid-cols-3 grid-rows-[200px_200px_250px] gap-4 sm:gap-8">
            {facilities.map((facility) => (
                <div className={`${facility.span} relative overflow-hidden rounded-2xl cursor-pointer group`} key={facility.title}>
                    <img src={facility.image}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center center' }}  />

                    <div className="absolute inset-0 bg-headline/0 group-hover:bg-headline/60 transition-all duration-300 flex items-end p-4">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{facility.title}</p>
                    </div>

                </div>
            ))}
        </div>

    </div>
    </section>
    </>
  )
}

export default Facilities