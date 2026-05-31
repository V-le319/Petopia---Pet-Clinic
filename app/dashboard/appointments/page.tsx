'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Sidebar from '@/components/dashboard/Sidebar'
import { mockBookings, petTypeBadge, statusBadge, type Booking } from '@/lib/mockData'


const Appointments = () => {
    const { data : session } = useSession()
  return (
    <>
    <div className="w-full min-h-screen flex flex-col  bg-lightLavender gap-8 py-4 pt-14 md:pt-0 pb-24">
      <div className="w-full h-auto p-4 px-8 sm:px-10 bg-white/80 mt-6 flex justify-between">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-medium text-headline">Appointments</h1>
            <p className="text-text text-sm">All booking submissions</p>
          </div>

          <div className="self-center hidden md:block">
            {session?.user?.image && (
                <Image src={session.user.image}
                       width={36}
                       height={36}
                       alt="avatar"
                       className="rounded-full"
                        />
                 )}
          </div>
      </div>

      <div className="w-full h-auto px-8 flex flex-col gap-8">

          <div className="flex flex-col items-center sm:flex-row gap-4 w-full">
            <input className="sm:w-1/2 w-full bg-white/80 text-base text-text rounded-xl px-6 py-2 border-none"
                  placeholder="Search by name, pet, service ..."/>
            <div className="flex gap-4">
              <button className="dashboard-btn">All</button>
              <button className="dashboard-btn">Confirmed</button>
              <button className="dashboard-btn">Pending</button>
            </div>
          </div>

              {/* ── MOBILE: card list ── */}
      <div className=" w-full h-auto bg-white/80 flex flex-col gap-2 p-4 rounded-xl sm:hidden">
                 {mockBookings.map((b, i) => (
          <div key={i} className="flex items-start justify-between py-4 border-b border-text/20 last:border-0">

            {/* Left: pet · service, owner · date */}

             <div className="grid grid-cols-[100px_1fr] gap-x-2 items-start ">
              <span className="font-medium text-text text-sm uppercase">{b.pet}</span>
              <span className="text-smallTag text-sm font-medium ">{b.service}</span>
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
          <div className="hidden sm:block w-full bg-white/80 rounded-xl">
            <div className="w-full p-4 flex justify-between">
            <span className="text-headline text-xl font-medium self-center">All bookings</span>
            <span className="text-smallTag bg-tagHover py-1 px-4 rounded-full">Total</span>
          </div>

          <table className="hidden bg-white/80 p-6 rounded-xl sm:table w-full text-sm border-collapse">
        <thead>          
          <tr className="text-left text-text border-y p-4 border-text/20 bg-lightBg/20">
            <th className="py-2 px-3 font-medium">OWNER</th>
            <th className="py-2 px-3 font-medium">PET</th>
            <th className="py-2 px-3 font-medium">SERVICE</th>
            <th className="py-2 px-3 font-medium">DATE</th>
            <th className="py-2 px-3 font-medium">NOTE</th>
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
              <td className="py-4 px-3 text-text">{b.note}</td>
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

      </div>

    </div>
    </>
  )
}

export default Appointments