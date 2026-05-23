import Image from 'next/image'
import React from 'react'

const Team = () => {
  const team = [
  {
    image: "/images/Medical Professional Portrait.png",
    name: "Dr. Sarah Mitchell",
    major: "General Practice",
    description: "10 years of experience in routine care and preventive medicine for dogs and cats.",
  },
  {
    image: "/images/Confident Medical Worker.png",
    name: "Dr. Alexandria Lee",
    major: "Exotic Animals",
    description: "Specialized in birds, reptiles, and small mammals with a gentle, patient approach.",
  },
  {
    image: "/images/Portrait of a Healthcare Professional.png",
    name: "Dr. Emily Carter",
    major: "Dental Care",
    description: "Dedicated to pet oral health with expertise in dental surgery and hygiene treatments.",
  },
  {
    image: "/images/Smiling Healthcare Worker.png",
    name: "Dr. James Hughes",
    major: "Surgery",
    description: "Board-certified surgeon with over 8 years performing complex soft tissue and orthopedic procedures.",
  },
  {
    image: "/images/1.png",
    name: "Dr. Elizabeth Green",
    major: "Dermatology",
    description: "Focuses on skin, coat, and allergy conditions, helping pets live comfortably in their own skin.",
  },
  {
    image: "/images/Medical Professional Portrait (1).png",
    name: "Dr. Marcus Hans",
    major: "Emergency Care",
    description: "Calm under pressure with extensive experience in critical care and trauma response.",
  },
]
  

  return (
    <>
    <section  id="team"
              className=" h-auto px-10 sm:px-16 py-10 gap-6 sm:py-20"
              style={{ background: 'linear-gradient(to top, transparent 0%, #5750A920 15%, #5750A960 100%, #5750A9 100%)' }}>
        
        <div className="max-w-6xl mx-auto flex flex-col  gap-8">
          <div className="w-full sm:w-1/2 mb-8 flex flex-row justify-start items-start gap-4">
              <h1 className="heading">Meet Our Team</h1>
          </div>

          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
              {team.map((team) => (
                <div className="team-card flex flex-row items-stretch"
                      key={team.name}>
                  <div className="relative w-[150px] min-h-[150px] flex-shrink-0 rounded-lg self-stretch overflow-hidden bg-tagHover/40">
                                  <Image src={team.image}
                                         alt={team.name}
                                         fill
                                          className="object-cover object-center"/>
                                </div>
                  
                                <div className="flex flex-col justify-between gap-4">
                                  <h2 className="text-2xl text-headline font-semibold">{team.name}</h2>
                                  <div className="h-px bg-text/50"></div>
                                  <p className="text-text text-sm">{team.description}</p>
                                </div>

                </div>
              ))}
          </div>
        </div>
    </section>
    </>
  )
}

export default Team