import React from 'react'
import DatePicker from './DatePicker'

const BookingForm = () => {
  return (
    <>
    <section id="booking">
      <div className="w-full h-full bg-mainBG/30 mb-8 px-10 sm:px-16 py-10 gap-6 sm:py-20 ">
        <div className="max-w-6xl mx-auto flex flex-col justify-center items-center gap-8">
            
              <div className='text-center'>
                <span className="inline-block text-xs tracking-widest uppercase bg-white/90 text-smallTag font-normal px-3 py-1 rounded-full mb-4">
            easy online booking
          </span>
                <h1 className="heading mb-4 sm:mb-8">Booking an Appointment</h1>
              </div>

              <form className="form">
                <div className="info w-full grid grid-cols-1 sm:px-10 sm:gap-10 sm:grid-cols-2 gap-6">
                  <div className="form-input">
                    <label>Your Name:</label>
                    <input className="input"
                            placeholder='Your Name...'/>
                  </div>

                  <div className="form-input">
                    <label>Pet Name:</label>
                    <input className="input"
                            placeholder='Your Name...'/>
                  </div>

                  <div className="form-input">
                    <label>Pet Type:</label>
                    <select className="input">
                      <option className="content_text text-opacity-60">--Select--</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-input">
                    <label>Service:</label>
                    <select className="input">
                      <option className="content_text text-opacity-60">--Select--</option>
                      <option value="General Check-up">General Check-up</option>
                      <option value="Vaccination">Vaccination</option>
                      <option value="Grooming">Grooming</option>
                      <option value="Dental Care">Dental Care</option>
                      <option value="Emergency">Emergency</option>
                      <option value="Surgery">Surgery</option>
                    </select>
                  </div>

                  <div className="form-input">
                    <label>Date:</label>
                      <DatePicker/>
                  </div>

                  <div className="form-input">
                    <label>Time Slot:</label>
                    <input className="input"
                            placeholder='Your Name...'/>
                  </div>
                </div>

                  <div className="form-input w-full sm:px-10">
                  <label className="content_text font-medium">Note (Optional)</label>
                <textarea className="content_text w-full h-auto rounded-lg p-2"
                          placeholder=""/>
                </div>
                
                <button className="button-reversed w-full py-2 sm:mt-6 sm:py-4 sm:w-1/2">Confirm Booking 🐾</button>
              </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default BookingForm