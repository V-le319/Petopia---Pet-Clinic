import React from 'react'

const FindUs = () => {
  const contactCard = [
   {
  icon: "/images/home_pin_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
  title: "Address",
  description: "24 Maple Ave, Austin, TX 78701"
},
{
  icon: "/images/nest_clock_farsight_analog_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
  title: "Hours",
  description: "Mon – Sat: 8:00 AM – 6:00 PM"
},
{
  icon: "/images/call_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.svg",
  title: "Phone",
  description: "+1 (512) 456 7890"
},
{
  icon: "/images/mail_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24 (1).svg",
  title: "Email",
  description: "hello@petopia.com"
},
  ]
  return (
    <>
    <section id="contact" className="w-screen bg-mainBg/40 gap-6 sm:pt-10">
      <div className="flex flex-col items-center justify-center">
      
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center px-10 sm:px-16 py-10  mb-8">
        <h2 className="subheading">We're here for your furry family</h2>
        <p className="content_text sm:w-2/3">Whether it's a routine checkup or an emergency, our team is available 6 days a week. 
        <br/>Reach out and we'll get back to you as soon as possible.</p>
      </div>
      
      <div className="w-full h-auto bg-darkBg/85 px-10 sm:px-16 py-10 sm:py-20 gap-10 sm:gap-12 flex flex-col justify-center items-center text-center">
            <div className="text-center">
              <h1 className="subheading-reversed">Find Us</h1>
              <p className="content_text-reversed">We're easy to reach, find our details below.</p>
            </div>

            <div className="contact-container" >
              
                {contactCard.map((contact) => (
                  <div className="contact-card" key={contact.title}>
                    <div className="">
                      <img src={contact.icon}
                            className="bg-transparent w-8 h-8 sm:h-12 sm:w-12 rounded-full p-1"/>
                      </div>

                      <div className="flex flex-col items-center gap-2">
                        <h3 className="text-tagHover font-medium uppercase">{contact.title}</h3>
                        <p className="text-mainBG/70 text-sm">{contact.description}</p>
                      </div>
                  </div>
                ))}
              

            </div>

      </div>
      
      </div>
    </section>
    </>
  )
}

export default FindUs