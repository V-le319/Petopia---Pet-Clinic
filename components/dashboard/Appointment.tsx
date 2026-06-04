'use client'
import Link from "next/link"
import React from "react"
import { getAllBookings, petTypeBadge, statusBadge, type Booking } from '@/lib/bookings'
import { supabase } from "@/lib/supabase"


const Appointment = () => {
     const [bookings, setBookings] = React.useState<Booking[]>([])

  React.useEffect(() => {
    getAllBookings().then(setBookings)

    const channel = supabase
      .channel('bookings')
      .on('postgres_changes',
  { event: 'UPDATE', schema: 'public', table: 'Booking' },
  () => { 
    console.log('realtime fired')
    getAllBookings().then(setBookings) 
  }
)
     .subscribe((status) => {
    console.log('channel status:', status)
  })

    return () => { supabase.removeChannel(channel) }
  }, [])
    
  return (
    <div className="w-full flex-1 bg-white/80 rounded-xl p-4">

      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-text/20">
        <span className="font-medium text-headline">
          {/* "Recent bookings" on mobile, "All Bookings" on tablet/desktop */}
          <span className="sm:hidden">Recent bookings</span>
          <span className="hidden sm:inline">All Bookings</span>
        </span>
        <Link href="/dashboard/appointments" className="text-sm text-headline hover:text-highlight">
          View all →
        </Link>
      </div>

      {/* ── MOBILE: card list ── */}
      <div className="flex flex-col  sm:hidden">
        {bookings.map((b, i) => (
          <div key={i} className="flex items-center justify-between py-4 border-b border-text/20 last:border-0">

            {/* Left: pet · service, owner · date */}
            <div className="grid grid-cols-[100px_1fr] gap-x-2 ">
              <span className="font-medium text-text text-sm uppercase">{b.pet_name}</span>
              <span className="text-smallTag text-sm font-medium">{b.service}</span>
              <span className="text-xs text-text/50">{b.name}</span>
              <span className="text-xs text-text/50">{b.date}</span>
          </div>

            {/* Right: status badge */}
            <span className={`text-xs px-3 py-1 rounded-full font-medium shrink-0 ${statusBadge[b.status]}`}>
              {b.status}
            </span>

          </div>
        ))}
      </div>

      {/* ── TABLET + DESKTOP: table ── */}
      <table className="hidden sm:table w-full text-sm border-collapse">
        <thead>
          <tr className="text-left text-text border-y border-text/20 bg-lightBg/20">
            <th className="py-2 px-3 font-medium">OWNER</th>
            <th className="py-2 px-3 font-medium">PET</th>
            <th className="py-2 px-3 font-medium">SERVICE</th>
            <th className="py-2 px-3 font-medium">DATE</th>
            <th className="py-2 px-3 font-medium">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i} className="border-b border-text/10 last:border-0">
              <td className="py-4 px-3 text-text font-medium">{b.name}</td>
              <td className="py-4 px-3">
                <span className="inline-flex items-center gap-2">
                  <span className="text-text">{b.pet_name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${petTypeBadge[b.pet_type]}`}>
                    {b.pet_type}
                  </span>
                </span>
              </td>
              <td className="py-4 px-3 text-text">{b.service}</td>
              <td className="py-4 px-3 text-text">{b.date}</td>
              <td className="py-4 px-3">
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${statusBadge[b.status]}`}>
                  {b.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Appointment