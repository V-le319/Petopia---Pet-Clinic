'use client'

import { useState } from 'react'
import { LucideMenu, User, X } from 'lucide-react'
import Login from '@/app/login/page'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
        const [ isOpen, setIsOpen] = useState (false);

  return (
    <>
    <div className="max-w-full relative z-10 h-24 px-6 bg-white flex-between navbar-shadow ">
        <div className='flex-1'>
            <Link href="/"><p className='logo'>Petopia</p></Link>
        </div>

        <div className='hidden sm:flex gap-8 self-center text-text text-lg font-medium'>
            <Link href="/#services" className='links'>Services</Link>
            <Link href="/#about" className='links'>About</Link>
            <Link href="/#contact" className='links'>Contact</Link>
        </div>

        <div className='flex-1 flex justify-end gap-4 sm:gap-6'> 
            <Link href="/#booking" className='button'>Book Now</Link>
            <Link href="/login" className='hidden sm:block button'>Staff Login</Link>
            <Link href="/login" className='sm:hidden self-center p-2 rounded-full hover:text-white hover:bg-headline'>
                <User size={28}/>
            </Link>
            <button className="sm:hidden" onClick={()=> setIsOpen(!isOpen)}>
                {isOpen ? <X/> : <LucideMenu/>}
            </button>
        </div>
        
        {isOpen && (
            <div className='absolute top-24 left-0 w-full bg-white flex flex-col text-base  py-4 sm:hidden'>
            <Link href="/#services" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Services</Link>
            <Link href="/#about" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>About</Link>
            <Link href="/#contact" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Contact</Link>
            
        </div>
        )}
    </div>
    </>
  )
}

export default Navbar