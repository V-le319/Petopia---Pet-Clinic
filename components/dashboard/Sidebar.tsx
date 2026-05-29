'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const Sidebar = () => {
  const { data: session} = useSession()
  
  return (
    <>
    <div className="w-screen sidebar">

        <Link href="/">
      <div className='flex px-4 items-center gap-2  mb-2'>
        <img src="/images/petopia-logo-Photoroom.png"
              width={40}
              height={60}/>
        <p className='sidebarLogo'>Petopia</p>
      </div>
      </Link>

      <div className="h-px w-full bg-white/40 mb-8"></div>

      <div className="w-full flex flex-col items-start gap-8  ">
        <Link href="/dashboard" className="w-full side-hover">
        <span className="sidebar-heading pl-2">Dashboard</span>
        </Link>
        <Link href="/dashboard/appointment" className="w-full side-hover">
        <span className="sidebar-heading pl-2">Appointments</span>
        </Link>
        <Link href="/dashboard/schedule" className="w-full side-hover">
        <span className="sidebar-heading pl-2">Schedule</span>
        </Link>
      </div>

    </div>

    <div className="topbar">
     
        <Link href="/">
      <div className='flex items-center gap-2'>
        <img src="/images/petopia-logo-Photoroom.png"
              width={40}
              height={60}/>
        <p className='sidebarLogo'>Petopia</p>
      </div>
      </Link>

      <div>
        {session?.user?.image && (
                      <Image
                        src={session.user.image}
                        width={36}
                        height={36}
                        alt="avatar"
                        className="rounded-full"
                      />
                    )}
      </div>

    </div>

    <div className="bottombar ">
      <Link href="/dashboard">
        <span className="bottom-heading">Dashboard</span>
        </Link>
        <Link href="/dashboard/appointment">
        <span className="bottom-heading">Appointments</span>
        </Link>
        <Link href="/dashboard/schedule">
        <span className="bottom-heading">Schedule</span>
        </Link>
    </div>
    </>
  )
}

export default Sidebar