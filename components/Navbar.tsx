import Login from '@/app/login/page'
import Link from 'next/link'
import React from 'react'
import Services from './Services'

const Navbar = () => {
  return (
    <>
    <div className="max-w-full relative z-10 h-24 px-6 bg-white flex-between navbar-shadow ">
        <div className='flex-1'>
            <p className='logo'>Petopia</p>
        </div>

        <div className='flex gap-8 self-center text-text text-lg font-medium'>
            <Link href="/#services" className='links'>Services</Link>
            <Link href="/#about" className='links'>About</Link>
            <Link href="/#contact" className='links'>Contact</Link>
        </div>

        <div className='flex-1 flex justify-end gap-8'>
            <button className='button'>Staff Login</button>
            <button className='button'>Book Now</button>
        </div>
        
    </div>
    </>
  )
}

export default Navbar