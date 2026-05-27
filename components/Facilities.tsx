'use client'
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import FadeIn from './FadeIn';


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
        
    ];

    const [selected, setSelected] = React.useState<string | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

    const handlePrev = () => setSelectedIndex(prev => prev === 0 ? facilities.length - 1 : prev! - 1)
    const handleNext = () => setSelectedIndex(prev => prev === facilities.length - 1 ? 0 : prev! + 1)

    
  return (
    <>
    <section id="facilities" className="w-full h-full bg-mainBG/30 mb-8 px-10 py-10 gap-6 sm:py-16 ">
      <FadeIn className="w-full">
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-6">
        
        <div className="mb-4">
            <span className="inline-block text-xs tracking-widest uppercase bg-tagHover text-smallTag font-normal px-3 py-1 rounded-full mb-4">
            Our Facilities
            </span>
            <h1 className="heading sm:text-5xl mb-4 leading-snug">A space built for care</h1>
            <p className="sm:w-2/3 content_text">Every corner of our clinic is designed with your pet's comfort in mind — clean, calm, and fully equipped for everything from routine visits to complex procedures.</p>
        </div>

        <div className="w-full grid grid-cols-3 grid-rows-[200px_200px_250px] gap-4 sm:gap-10">
            {facilities.map((facility, index) => (
                <motion.div
                    key={facility.title}
                    className={`${facility.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    onClick={() => setSelectedIndex(index)}
                 >
                {/* <div className={`${facility.span} relative overflow-hidden rounded-2xl cursor-pointer group`} key={facility.title}
                        onClick={() => setSelectedIndex(index)}> */}
                    <img src={facility.image}
                          className="w-full h-full object-cover"
                          style={{ objectPosition: 'center center' }}  />

                    <div className="absolute inset-0 bg-headline/0 group-hover:bg-headline/60 transition-all duration-300 flex items-end p-4">
                    <p className="text-white font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">{facility.title}</p>
                    </div>

                
                </motion.div>
            ))}
        </div>

           {/*light box */}
        <div> 
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                    onClick={() => setSelectedIndex(null)}>
                    <button className="absolute top-6 right-6 text-white" onClick={() => setSelectedIndex(null)}>
                    <X size={32} />
                    </button>
                    
                    <button className="absolute left-6 text-white" onClick={(e) => { e.stopPropagation(); handlePrev() }}>
                    <ChevronLeft size={48} />
                    </button>
                    
                    <button className="absolute right-6 text-white" onClick={(e) => { e.stopPropagation(); handleNext() }}>
                    <ChevronRight size={48} />
                    </button>
                    <img src={facilities[selectedIndex].image} className="max-w-[90%] max-h-[90vh] object-contain rounded-xl" />
                </div>
            )}
        </div>

    </div>
    </FadeIn>
    </section>
    </>
  )
}

export default Facilities