import Image from 'next/image'
import React from 'react'
import FadeIn from './FadeIn'

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
  <section id="team" className="h-auto px-4 sm:px-16 gap-6 py-10 sm:py-20">
    <div className="max-w-6xl mx-auto flex flex-col items-center gap-3 mb-12">
      <FadeIn delay={0}>
        <h1 className="heading sm:text-5xl text-center">Meet Our Team</h1>
        <p className="text-text text-sm text-center mt-2">
          The elite hands caring for your family's best friends.
        </p>
      </FadeIn>
    </div>

    <FadeIn delay={0.2}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10">
        {team.map((member) => (
          <div className="flex flex-col items-center text-center gap-2" key={member.name}>
            
            <div className="w-24 h-24 rounded-full border-2  border-headline/40 p-1">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-tagHover/40">
                <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-center"
                />
              </div>
            </div>

            <h2 className="text-lg text-headline font-semibold mt-2">{member.name}</h2>
            <p className="text-highLight text-sm font-medium">{member.major}</p>
            <p className="text-text text-sm max-w-[240px]">{member.description}</p>
          </div>
        ))}
      </div>
    </FadeIn>
  </section>
</>
  )
}

export default Team