import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from './FadeIn'

const About = () => {
  const stats = [
    { headline: "9+", description: "Years of service" },
    { headline: "300+", description: "Happy pet families" },
    { headline: "6", description: "Expert vets" },
    { headline: "5 ★", description: "Average feedback" },
  ]

  return (
    <section id="about" className="w-full bg-opacity-30 px-4 md:px-16 py-8 gap-4 md:gap-6 md:py-16" >

      <FadeIn className="w-full">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FBF8FF4D] to-transparent pointer-events-none" />
      {/* Top: image + content */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-16 mb-6">
        
        <div className="flex-1">
          <span className="inline-block text-xs tracking-widest uppercase bg-tagHover text-smallTag font-normal px-3 py-1 rounded-full mb-6">
            About us
          </span>
          <h1 className="heading sm:text-5xl font-semibold heading leading-snug mb-4">
            A clinic built on<br />love for animals
          </h1>
          <p className="content_text leading-relaxed mb-4">
            Founded in 2015, PawClinic has been a go-to veterinary care center
            in Saigon for over 2,000 families. Our team of licensed vets and
            groomers treat every animal like their own.
          </p>

        <div className="sm:w-3/4 flex gap-2 sm:gap-4">
          <Link href="/#team"><button className="inline-flex items-center  button duration-200 text-white text-sm font-medium px-4 py-2.5 rounded-full">
            Our Medical Team
          </button>
          </Link>

          <Link href="/#facilities"><button className="inline-flex items-center  button duration-200 text-white text-sm font-medium px-4 py-2.5 rounded-full">
            Our Facilities
          </button>
          </Link>
        </div>
          
        </div>
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-1/2 h-72 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/about.png"
            alt="Vet with pet"
            fill
            className="object-cover"
          />
        </div>

       
      </div>

      {/* Stats strip */}
       <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#5750A9]/90 px-10 sm:px-32 py-8 flex items-center justify-around">
          {stats.map((stat, index) => (
            <React.Fragment key={stat.headline}>
              <div className="text-center">
                <h3 className="text-white text-3xl font-medium mb-1">{stat.headline}</h3>
                <p className="text-white/70 text-xs tracking-wide">{stat.description}</p>
              </div>
              {index < stats.length - 1 && <div className="w-px h-9 bg-white/25" />}
          </React.Fragment>
        ))}
      </div>

      </FadeIn>
    </section>
  )
}

export default About