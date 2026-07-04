'use client'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Sidebar from '@/components/dashboard/Sidebar'
import { getAllBookings, petTypeBadge, statusBadge, type Booking } from '@/lib/bookings'
import Link from 'next/link'
import { CalendarCheck, CheckCircle } from 'lucide-react'
import React from 'react'
import StatusActions from '@/components/dashboard/StatusActions'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

const allowedEmails = ['vincykat@gmail.com']

const Appointments = () => {
    const { data : session } = useSession()
    const isAdmin = allowedEmails.includes(session?.user?.email ?? '')

    const [bookings, setBookings] = React.useState<Booking[]>([])

    const [filter, setFilter] = React.useState<'All' | Status>('All')
    const [search, setSearch] = useState('')

    const filtered = bookings.filter(b => {
        const matchesFilter = filter === 'All' || b.status === filter
        const matchesSearch = search === '' ||
          b.name.toLowerCase().includes(search.toLowerCase()) ||
          b.pet_name.toLowerCase().includes(search.toLowerCase()) ||
          b.service.toLowerCase().includes(search.toLowerCase())

          return matchesFilter && matchesSearch
    })
    

        React.useEffect(() => {
          getAllBookings().then(setBookings)

          const channel = supabase
              .channel('bookings')
              .on('postgres_changes', 
                { event: 'UPDATE', schema: 'public', table: 'Booking' },
                   () => { getAllBookings().then(setBookings) }
                  )
              .subscribe()

  return () => { supabase.removeChannel(channel) }
}, [])
    
          const refetch = () => getAllBookings().then(setBookings)

  return (
    <>
    <div className="w-full min-h-screen flex flex-col  bg-lightLavender gap-8 py-4  pt-14 md:pt-0 pb-24">
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

          <div className="flex flex-col justify-center items-center sm:flex-row gap-4 w-full">
            <input onChange={(e) => setSearch(e.target.value)} value={search}
                  className="sm:w-1/2 w-full bg-white/80 text-base text-text rounded-xl px-6 py-2 border-none"
                  placeholder="Search by name, pet, service ..."/>
            <div className=" flex gap-2 sm:gap-4">
              <button onClick= {() => setFilter('All')}
                      className={`dashboard-btn ${filter === 'All' ? 'bg-headline text-white' : ''}`}>All</button>

              <button onClick= {() => setFilter('Confirmed')}
                      className={`dashboard-btn ${filter === 'Confirmed' ? 'bg-headline text-white' : ''}`}>
                        Confirmed</button>

              <button onClick= {() => setFilter('Pending')}
                      className={`dashboard-btn ${filter === 'Pending' ? 'bg-headline text-white' : ''}`}>
                Pending</button>

              <button onClick= {() => setFilter('Done')}
                      className={`dashboard-btn ${filter === 'Done' ? 'bg-headline text-white' : ''}`}>
                    Done</button>
            </div>
          </div>

              {/* ── MOBILE: card list ── */}
      <div className=" w-full h-auto bg-white/80 flex flex-col gap-2 p-4 rounded-xl sm:hidden">
                 {filtered.map((b, i) => (
          <div key={i} className="flex items-start justify-between py-4 border-b border-text/20 last:border-0">

            {/* Left: pet · service, owner · date */}

             <div className="grid grid-cols-[100px_1fr] gap-x-2 items-start ">
              <span className="font-medium text-text text-sm uppercase">{b.pet_name}</span>
              <span className="text-smallTag text-sm font-medium ">{b.service}</span>
              <span className="text-xs text-text/50">{b.name}</span>
              <span className="text-xs text-text/50">{b.date}</span>
          </div> 

            {/* Right: status badge */}
            <div className="flex items-center gap-4">
              
            <StatusActions id={b.id} status={b.status} onUpdate={refetch} isAdmin={isAdmin} />
            </div>

          </div>
        ))}
        <div className="flex gap-6 justify-end items-center w-full">
        <span className="text-text/70 text-sm">Showing 1-5 of 27</span>
        <div className="text-text/70 text-sm flex gap-1">
          <Link href=""><button className="page-btn">1</button></Link>
          <Link href=""><button className="page-btn">2</button></Link>
          <Link href=""><button className="page-btn">3</button></Link>
        </div>
      </div>

      </div>
      

                 {/* ── TABLET + DESKTOP: table ── */}
          <div className="hidden sm:block w-full overflow-hidden bg-white/80 rounded-xl">

            <div className="w-full p-4 flex justify-between">
            <span className="text-headline text-xl font-medium self-center">All bookings</span>
            <span className="text-smallTag bg-tagHover py-1 px-4 rounded-full">Total</span>
          </div>

          <table className="hidden bg-white/80 rounded-xl sm:table w-full text-sm">
        <thead>          
          <tr className="text-left text-text border-y p-6 border-text/20 bg-lightBg/20">
            <th className="py-2 px-3 pl-4 font-medium">OWNER</th>
            <th className="py-2 px-3 font-medium">PET</th>
            <th className="py-2 px-3 font-medium">SERVICE</th>
            <th className="py-2 px-3 font-medium">DATE</th>
            <th className="py-2 px-3 font-medium">NOTE</th>
            <th className="py-2 px-3 font-medium">STATUS</th>
          </tr>
        </thead>
        <tbody className="w-full px-4">
          {filtered.map((b, i) => (
            <tr key={i} className="border-b border-text/10 last:border-0">
              <td className="py-4 px-3 text-text pl-4 font-medium">{b.name}</td>
              <td className="py-4 px-3">
                <span className="inline-flex items-center gap-2">
                  <span className="text-text uppercase">{b.pet_name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${petTypeBadge[b.pet_type]}`}>
                    {b.pet_type}
                  </span>
                </span>
              </td>
              <td className="py-4 px-3 text-text">{b.service}</td>
              <td className="py-4 px-3 text-text">{b.date}</td>
              <td className="py-4 px-3 text-text">{b.note}</td>

              <td className="py-4 w-px whitespace-nowrap pr-4">
                <div className="flex items-center gap-4">
                  
                <StatusActions id={b.id} status={b.status} isAdmin={isAdmin} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-8 justify-end items-center w-full p-4">
        <span className="text-text/70 text-sm">Showing 1-5 of 27</span>
        <div className="text-text/70 text-sm flex gap-1">
          <Link href=""><button className="page-btn">1</button></Link>
          <Link href=""><button className="page-btn">2</button></Link>
          <Link href=""><button className="page-btn">3</button></Link>
        </div>
      </div>

  </div>

      </div>

    </div>
    </>
  )
}

export default Appointments