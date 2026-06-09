'use client'

import { useState, useEffect } from 'react'
import { LucideMenu, User, X, LogOut } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'

const allowedEmails = [
  
  'vincykat@gmail.com',
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  //const { data: session } = useSession();
  const { data: session, status } = useSession();

  const isAdmin = allowedEmails.includes(session?.user?.email ?? '')

  useEffect(() => {
  const handleScroll = () => setScrolled(window.scrollY > 10)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, []);

useEffect(() => {
  let timer: ReturnType<typeof setTimeout>
  
  const handleScroll = () => {
    setScrolled(true)
    clearTimeout(timer)
    timer = setTimeout(() => setScrolled(false), 500)
  }
   // set up listener
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)  // clean up when component unmounts
}, []);



  return (
    <div className={`max-w-screen sticky top-0 left-0 right-0 z-50 h-auto p-4  flex-between transition-all duration-300 ${
  scrolled ? 'bg-white/50 backdrop-blur-sm' : 'bg-white navbar-shadow'
}`}>
      <Link href="/" className='w-1/3 flex items-center gap-2'>
      <div className='flex items-center gap-2'>
        <img src="/images/petopia-logo-Photoroom.png"
              width={40}
              height={60}/>
        <p className='logo'>Petopia</p>
      </div>
      </Link>

      <div className='hidden w-1/3 sm:flex items-center justify-center gap-8 self-center text-text text-lg font-normal'>
        <Link href="/#services" className='links'>Services</Link>
        <Link href="/#about" className='links'>About</Link>
        <Link href="/#contact" className='links'>Contact</Link>
        {isAdmin && <Link href="/dashboard" className='links'>Dashboard</Link>}
      </div>

      <div className='w-1/3 flex justify-end gap-4 sm:gap-6'>
        <Link href="/#booking" className='button hidden sm:flex items-center'>Book Now</Link>

        {/* Desktop */}
        {session ? (
          <div className='hidden sm:flex items-center gap-3'>
            {session.user?.image && (
              <Image
                src={session.user.image}
                width={36}
                height={36}
                alt="avatar"
                className="rounded-full"
              />
            )}
            <button onClick={() => signOut()}><LogOut size={20}/></button>
          </div>
        ) : (
          <Link href="/api/auth/signin" className='hidden sm:block button'>Sign In</Link>
        )}

        <button className="sm:hidden self-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X/> : <LucideMenu/>}
        </button>

        {/* Mobile */}
        {status === 'loading' ? null : session ? (
          <div className='sm:hidden flex items-center self-center'>
               {session.user?.image && (
            <Image src={session.user.image} width={28} height={28} alt="avatar" className="rounded-full"/>
                 )}
          </div>
          ) : (
          <Link href="/api/auth/signin" className='sm:hidden self-center p-1 rounded-full hover:text-white hover:bg-headline'>
          <User size={22}/>
          </Link>
          )}

        
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white flex flex-col text-center text-base py-4 sm:hidden'>
          {isAdmin && <Link href="/dashboard" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Dashboard</Link>}
          <Link href="/#services" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Services</Link>
          <Link href="/#about" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>About</Link>
          <Link href="/#contact" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Contact</Link>
          
          {session && (
          <button onClick={() => signOut()}
                  className="w-full px-4 py-2 duration-200 text-smallTag hover:bg-headline hover:bg-opacity-80 hover:text-white flex items-center justify-center gap-2">
                    Sign Out<LogOut size={20}/></button>
          )}

          <Link href="/#booking" className='button-reversed mt-2 self-center w-1/2 px-4 py-2 flex justify-center items-center'>Book Now</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar