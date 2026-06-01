import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import FadeIn from './FadeIn';

const Services = () => {
  const services = [
  {
    image: "/images/diagnosis_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "General Checkup",
    description: "Routine health exams to keep your pet in top shape. Early detection, peace of mind.",
    price: "$30",
    
  },
  {
    image: "/images/vaccines_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "Vaccinations",
    description: "Keep your pets protected with up-to-date vaccines tailored to their age and lifestyle.",
    price: "$25",
    
  },
  {
    image: "/images/dentistry_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "Dental Care",
    description: "Healthy teeth, happy pet. Professional cleaning and dental checkups for lasting oral health.",
    price: "$60",
    
  },
  {
    image: "/images/content_cut_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "Grooming",
    description: "From baths to trims, we keep your furry friend looking and feeling their best.",
    price: "$40",
    
  },
  {
    image: "/images/emergency_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "Emergency Care",
    description: "When every second counts, our team is ready to act fast and care with urgency.",
    price: "$120",
   
  },
  {
    image: "/images/health_cross_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
    title: "Surgery",
    description: "Advanced surgical procedures performed by experienced vets in a safe, caring environment.",
    price: "$300",
    
  },
];

  return (
    <>
    <section id="services" className="w-full h-full bg-mainBG/30 mb-8 px-10 sm:px-16 py-10 gap-6 sm:py-20 ">
      
      <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:gap-8">
      
      <FadeIn delay={0}>
      <div className="w-full sm:w-1/2 flex flex-col justify-start items-start gap-4 mb-8">
        <h1 className="heading sm:text-5xl">Our Services</h1>
        <p className="content_text">Everything your pet needs, all in one place. From routine visits to emergency care, we've got them covered.</p>
      </div>
      </FadeIn>

      <FadeIn delay={0.2}>
      <div className="w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-10">
        {services.map((service) => (
          <div className="grid-card "
                key={service.title}>

              <div className="icon p-1  bg-smallTag bg-opacity-85 text-xl text-center rounded-lg top-0 left-4">
                <Image src={service.image} alt={service.title}
                      width={26}
                      height={26}/>
              </div>

              <div className="sm:mb-4 flex flex-col gap-2 flex-1">
                <h2 className="text-2xl text-headline font-semibold">{service.title}</h2>
                <p className="content_text">{service.description}</p>
              </div>

              <div className="w-full h-px bg-text bg-opacity-40"></div>

              <div className="w-full grid grid-cols-2  ">
                <p className="text-2xl text-headline font-semibold">{service.price}</p>
                <Link href="#booking"
                      className="button flex items-center justify-center">
                        Booking
                  </Link>
              </div>
            </div>
        ))}

      </div>
      </FadeIn>
    </div>

        
    </section>
    </>
  )
}

export default Services