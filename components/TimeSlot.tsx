'use client'
import React from 'react'

interface TimeSlotPros {
    date: Date | undefined;
    time: string | undefined;
    setTime: (time: string) => void
}

const TimeSlot = ({ date, time, setTime} : TimeSlotPros) => {
    const slots = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']

return (
  <div className="grid grid-cols-4 gap-2">
    {slots.map((slot) => (
      <button
        type="button"
        key={slot}
        onClick={() => setTime(slot)}
        className={`px-3 py-2 rounded-lg  text-sm hover:bg-headline hover:text-white ${
          time === slot ? 'bg-headline text-white' : 'bg-white text-headline'
        }`}
      >
        {slot}
      </button>
    ))}
  </div>
)
}


export default TimeSlot