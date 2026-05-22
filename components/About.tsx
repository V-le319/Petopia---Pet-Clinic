import React from 'react'
import Image from 'next/image'

const About = () => {
  const stats = [
    { headline: "9+", description: "Years of service" },
    { headline: "300+", description: "Happy pet families" },
    { headline: "6", description: "Expert vets" },
    { headline: "5 ★", description: "Average feedback" },
  ]

  return (
    <section className="w-screen bg-opacity-70 px-16 py-10 gap-6 sm:py-20"
      style={{ background: 'linear-gradient(to bottom, #FBF8FF 0%, #5750A920 15%, #5750A960 60%, #5750A9 100%)' }}
    >
      {/* Top: image + content */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-11 sm:gap-16 mb-12">
        
        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-1/2 h-72 rounded-2xl overflow-hidden relative">
          <Image
            src="/images/close-up-smiling-female-doctor-stroking-pet-dog-examination-vet-clinic_960396-496629.jpg"
            alt="Vet with pet"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1">
          <span className="inline-block text-xs tracking-widest uppercase bg-white/35 text-smallTag font-normal px-3 py-1 rounded-full mb-4">
            About us
          </span>
          <h2 className="text-3xl font-semibold heading leading-snug mb-4">
            A clinic built on<br />love for animals
          </h2>
          <p className="content_text leading-relaxed mb-6">
            Founded in 2015, PawClinic has been a go-to veterinary care center
            in Saigon for over 2,000 families. Our team of licensed vets and
            groomers treat every animal like their own.
          </p>
          <button className="inline-flex items-center gap-2 button-reversed duration-200 text-white text-sm font-medium px-5 py-2.5 rounded-full">
            Our Medical Team →
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div className="max-w-4xl mx-auto flex items-center justify-around pt-8 border-t border-white/25">
        {stats.map((stat, index) => (
          <React.Fragment key={stat.headline}>
            <div className="text-center">
              <h3 className="text-white text-3xl font-medium mb-1">{stat.headline}</h3>
              <p className="text-white/70 text-xs tracking-wide">{stat.description}</p>
            </div>
            {index < stats.length - 1 && (
              <div className="w-px h-9 bg-white/25" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default About