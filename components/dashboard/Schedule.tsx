import Link from 'next/link'
import React from 'react'

type Status = 'Confirmed' | 'Pending'
type PetType = 'Dog' | 'Cat' | 'Other'

interface Booking {
    owner: string
    pet: string
    petType: PetType
    service: string
    date: string
    status: Status
}

    const mockBookings: Booking[] = [
  { owner: 'Jane Doe',  pet: 'Luna',    petType: 'Dog',   service: 'Check-up',    date: '28 May · 10:00', status: 'Confirmed' },
  { owner: 'Marcus T.', pet: 'Oliver',  petType: 'Cat',   service: 'Vaccination', date: '28 May · 11:30', status: 'Pending'   },
  { owner: 'Sarah K.',  pet: 'Buster',  petType: 'Dog',   service: 'Grooming',    date: '29 May · 09:00', status: 'Confirmed'   },
  { owner: 'Leo Kim',   pet: 'Snowball', petType: 'Other', service: 'Dental Care', date: '30 May · 14:00', status: 'Pending'      },
]

    const petTypeBadge: Record<PetType, string> = {
        Dog:   'bg-blue-100   text-blue-500',
        Cat:   'bg-red-100    text-red-400',
        Other: 'bg-gray-100   text-gray-500',
    }

    const statusBadge: Record<Status, string> = {
      Confirmed: 'bg-highlight/40  text-lightBG',
      Pending:   'bg-orange-100 text-red-500',
    }

const Schedule = () => {
  return (
    <div className="w-full flex-1 bg-white/80 rounded-md p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-text/20">
        <span className="font-medium text-headline">
          {/* "Recent bookings" on mobile, "All Bookings" on tablet/desktop */}
          <span className="text-headline font-medium">Today's schedule</span>
        </span>
        <Link href="/dashboard/bookings" className="text-sm text-headline hover:text-highlight">
          View all →
        </Link>
      </div>

        <div className="flex flex-col gap-4">
          {mockBookings.map((b, i) => (
            <div key={i} className="pb-2 border-b border-text/20 last:border-0" >
              <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-medium text-text text-sm uppercase">{b.pet}</span>
                <span className="text-xs text-text/50">{b.owner}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-smallTag text-sm font-medium">{b.service}</span>
                <span className="text-xs text-text/50">{b.date}</span>
              </div>
              </div>
            
            
            <div>

            </div>
            </div>
            ))}
        </div>
      </div>
  )
}

export default Schedule