import Link from 'next/link'
import { getTodayBookings } from '@/lib/bookings'




const Schedule = async () => {
  const bookings = await getTodayBookings()
  return (
    <div className="w-full flex-1 bg-white/80 rounded-xl p-4">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-text/20">
        <span className="font-medium text-headline">
          {/* "Recent bookings" on mobile, "All Bookings" on tablet/desktop */}
          <span className="text-headline font-medium">Today's schedule</span>
        </span>
        <Link href="/dashboard/schedule" className="text-sm text-headline hover:text-highlight">
          View all →
        </Link>
      </div>

        <div className="flex flex-col gap-4">
          {bookings.map((b, i) => (
            <div key={i} className="pb-2 border-b border-text/20 last:border-0" >
              <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="font-medium text-text text-sm uppercase">{b.pet_name}</span>
                <span className="text-xs text-text/50">{b.name}</span>
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