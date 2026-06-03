'use client'
import React from 'react'
import DatePicker from './DatePicker'
import TimeSlot from './TimeSlot'
import { toast } from 'sonner'
import FadeIn from './FadeIn'
import { supabase } from '@/lib/supabase'
import { useSession } from 'next-auth/react'

const BookingForm = () => {
  const { data: session } = useSession()
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [time, setTime] = React.useState<string | undefined>(undefined)
  const [name, setName] = React.useState('')
  const [petName, setPetName] = React.useState('')
  const [petType, setPetType] = React.useState('')
  const [service, setService] = React.useState('')
  const [note, setNote] = React.useState('')

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()

      if (!session) {
    toast.error('Please sign in first so we can send your booking confirmation.', { duration: 4000 })
    return
  }

      if(!date || !time) {
        toast.error ('Please select a date and time slot.', 
                      {duration: 3000}
                    )
    return
      }
      const formattedDate = date.toLocaleDateString('en-CA') 

      const { error } = await supabase
      .from('Booking')
      .insert({
        name,
        pet_name: petName,
        pet_type: petType,
        service,
        date: formattedDate,
        time_slot: time,
        note,
        email: session?.user?.email,
      })

      if (error) {
         console.log('Supabase error:', error)
      toast.error('Something went wrong. Please try again.')
      return
    }

    // send confirmation email
  await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: session?.user?.email, // ← this is where we tell Resend who to send to
      name,
      petName,
      service,
      date: formattedDate,
      timeSlot: time,
    })
  })

      toast.success ('Booking confirmed!',
                      {duration: 3000}
                    )
    }

    

  return (
    <>
    <section id="booking">
      
      <div className="w-full h-full bg-mainBG/30 mb-8 px-10 sm:px-16 py-10 gap-6 sm:py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
            
            <FadeIn delay={0} >
              <div className='text-center'>
                <span className="inline-block text-xs tracking-widest uppercase bg-tagHover/60 text-smallTag font-normal px-3 py-1 rounded-full mb-4">
            easy online booking
                </span>
                <h1 className="heading sm:text-5xl mb-4 sm:mb-8">Booking an Appointment</h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="w-full">
              <form className="form"
                    onSubmit={handleSubmit}>
                <div className="info w-full grid grid-cols-1 sm:px-10 sm:gap-10 sm:grid-cols-2 gap-6">
                  <div className="form-input">
                    <label>Your Name:</label>
                    <input className="input" 
                          placeholder='Your Name...' 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          required/>
                  </div>

                  <div className="form-input">
                    <label>Pet Name:</label>
                    <input className="input" 
                            placeholder='Pet Name...' 
                            value={petName} 
                            onChange={(e) => setPetName(e.target.value)} 
                            required/>
                  </div>

                  <div className="form-input required">
                    <label>Pet Type:</label>
                    <select className="input" 
                            value={petType} 
                            onChange={(e) => setPetType(e.target.value)}>
                      <option className="content_text text-opacity-60">--Select--</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-input required">
                    <label>Service:</label>
                    <select className="input" 
                            value={service} 
                            onChange={(e) => setService(e.target.value)}>
                      <option className="content_text text-opacity-60">--Select--</option>
                      <option value="General Check-up">General Check-up</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Grooming">Grooming</option>
                      <option value="Dental Care">Dental Care</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Surgery">Surgery</option>
                    </select>
                  </div>

                  <div className="form-input required">
                    <label>Date:</label>
                      <DatePicker date={date} setDate={setDate} />
                {date && <TimeSlot date={date} time={time} setTime={setTime} />}
                  </div>

                </div>

                  <div className="form-input w-full sm:px-10">
                  <label className="content_text font-medium">Note (Optional)</label>
                <textarea className="content_text w-full h-auto rounded-lg p-2"
                          placeholder=""
                          value={note} 
                          onChange={(e) => setNote(e.target.value)}/>
                </div>
                
                <button className="button-reversed w-full py-2 sm:mt-6 sm:py-4 sm:w-1/2"
                        type="submit">Confirm Booking 🐾</button>
              </form>
              </FadeIn>
        </div>
      </div>

     
    </section>
    </>
  )
}

export default BookingForm