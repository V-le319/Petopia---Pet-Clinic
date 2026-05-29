import Link from "next/link"

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

const Appointment = () => {
  return (
    <div className="w-full flex-1 bg-white/80 rounded-md p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium text-headline">
          {/* "Recent bookings" on mobile, "All Bookings" on tablet/desktop */}
          <span className="sm:hidden">Recent bookings</span>
          <span className="hidden sm:inline">All Bookings</span>
        </span>
        <Link href="/dashboard/bookings" className="text-sm text-headline hover:text-highlight">
          View all →
        </Link>
      </div>

      {/* ── MOBILE: card list ── */}
      <div className="flex flex-col gap-3 sm:hidden">
        {mockBookings.map((b, i) => (
          <div key={i} className="flex items-center justify-between py-2 border-b border-text/10 last:border-0">

            {/* Left: pet · service, owner · date */}
            <div className="grid grid-cols-[1fr_1fr] gap-x-4">
              <span className="font-medium text-text text-sm uppercase">{b.pet}</span>
              <span className="text-smallTag text-sm font-medium">{b.service}</span>
              <span className="text-xs text-text/50">{b.owner}</span>
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
          {mockBookings.map((b, i) => (
            <tr key={i} className="border-b border-text/10 last:border-0">
              <td className="py-4 px-3 text-text font-medium">{b.owner}</td>
              <td className="py-4 px-3">
                <span className="inline-flex items-center gap-2">
                  <span className="text-text">{b.pet}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${petTypeBadge[b.petType]}`}>
                    {b.petType}
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