import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className="w-screen sidebar">

        <Link href="/">
      <div className='flex px-4 items-center gap-2 mb-2'>
        <img src="/images/petopia-logo-Photoroom.png"
              width={40}
              height={60}/>
        <p className='sidebarLogo'>Petopia</p>
      </div>
      </Link>

      <div className="h-px w-full bg-white/40 mb-8"></div>

      <div className="flex flex-col items-start gap-8 ml-2 ">
        <Link href="/dashboard" className="w-full side-hover">
        <span className="sidebar-heading ">Dashboard</span>
        </Link>
        <Link href="/dashboard/appointment" className="w-full side-hover">
        <span className="sidebar-heading">Appointments</span>
        </Link>
        <Link href="/dashboard/schedule" className="w-full side-hover">
        <span className="sidebar-heading">Schedule</span>
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
      </div>

    </div>

    <div className="bottombar ">
      <Link href="/dashboard">
        <span className="bottom-heading links">Dashboard</span>
        </Link>
        <Link href="/dashboard/appointment">
        <span className="bottom-heading links">Appointments</span>
        </Link>
        <Link href="/dashboard/schedule">
        <span className="bottom-heading links">Schedule</span>
        </Link>
    </div>
    </>
  )
}

export default Sidebar