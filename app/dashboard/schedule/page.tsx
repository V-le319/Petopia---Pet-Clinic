'use client'
import { getAllBookings, petTypeBadge,statusLeft, statusBadge, type Booking } from '@/lib/bookings'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const SchedulePage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [bookings, setBookings] = useState<Booking[]>([])
  useEffect(() => {
    getAllBookings().then(setBookings)
  }, [])

  const filtered = bookings.filter(b => 
    b.date === selectedDate.toLocaleDateString('en-CA') 
  )
  const prevDay = () => {
    const d = new Date(selectedDate)
    d.setDate(d.getDate() - 1)
    setSelectedDate(d)
  }
  const nextDay = () => {
    const d = new Date(selectedDate)
    d.setDate(d.getDate() + 1)
    setSelectedDate(d)
    }

    const formattedDate = selectedDate.toLocaleDateString('en-US', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const pendingCount = filtered.filter(b => b.status === 'Pending').length
  const confirmedCount = filtered.filter(b => b.status === 'Confirmed').length
  const doneCount = filtered.filter(b => b.status === 'Done').length

  return (
    <>
    <div className="w-full h-auto p-4 px-2 mt-14 sm:px-10 flex justify-around items-center  py-14 md:pt-0">
        <div className="bg-white/80 hover:bg-lightLavender hover:text-white duration-300 rounded-md p-2">
          <ChevronLeft  onClick={prevDay}
                        className="w-8 h-8 text-headline hover:text-white cursor-pointer" />
        </div>
        <span className="text-headline text-2xl font-bold">{formattedDate}</span>
        <div className="bg-white/80  hover:bg-lightLavender hover:text-white duration-300 rounded-md p-2">
          <ChevronRight onClick={nextDay}
                        className="w-8 h-8 text-headline cursor-pointer" />
        </div>
      </div>

    <div className="w-full min-h-screen flex flex-col px-8 gap-8">

      <div className="w-full grid grid-cols-3 gap-4">
        <div className="schedule-card ">
          <span className="text-orange-500 text-2xl sm:text-3xl font-medium">{pendingCount}</span>
          <span className="text-text text-sm font-medium sm:text-base">Pending</span>
        </div>

        <div className="schedule-card ">
          <span className="text-highlight text-2xl sm:text-3xl font-medium">{confirmedCount}</span>
          <span className="text-text text-sm font-medium sm:text-base">Confirmed</span>
        </div>

        <div className="schedule-card ">
          <span className="text-headline text-2xl sm:text-3xl font-medium">{doneCount}</span>
          <span className="text-text text-sm font-medium sm:text-base">Done</span>
        </div>
        
      </div>

      <div className="schedule w-full h-auto p-4 px-8 bg-white/80 rounded-xl flex flex-col gap-3">
      <span className="text-headline text-xl font-medium border-b pb-4 border-text/20">Today's bookings</span>
          {filtered.map((b, i) => (
            <div  key={i}
                  className=" flex gap-2 items-center pb-2 border-b border-text/20">
              <div className="flex flex-col">
                <span className="text-text text-sm">{b.date}</span>
                <span className="text-smallTag font-medium">{b.time_slot}</span>
              </div>

                {/* Slot card with colored left border */}
      <div className={`flex-1 flex gap-2 rounded-md px-3 py-2 ${statusLeft[b.status].bg}`}>
        <div className={`w-1 rounded-full shrink-0 ${statusLeft[b.status].bar}`} />
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-headline">{b.pet_name} · {b.service}</span>
          <span className="text-xs text-text/50">{b.name} · {b.pet_type}</span>
        </div>
      </div>

            </div>
          )

          )}
      </div>
    </div>
    </>
  )
}

export default SchedulePage