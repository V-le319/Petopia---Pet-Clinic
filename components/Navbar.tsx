'use client'

import { useState } from 'react'
import { LucideMenu, User, X, LogOut } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <div className="max-w-full relative z-10 h-auto p-6 bg-white flex-between navbar-shadow">
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
          <Link href="/api/auth/signin" className='hidden sm:block button'>Staff Login</Link>
        )}

        <button className="sm:hidden self-center" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X/> : <LucideMenu/>}
        </button>

        {/* Mobile */}
        {session ? (
          <div className='sm:hidden flex items-center gap-2 self-center'>
            {session.user?.image && (
              <Image
                src={session.user.image}
                width={32}
                height={32}
                alt="avatar"
                className="rounded-full"
              />
            )}
            <button onClick={() => signOut()}><LogOut size={20}/></button>
          </div>
        ) : (
          <Link href="/api/auth/signin" className='sm:hidden self-center p-2 rounded-full hover:text-white hover:bg-headline'>
            <User size={28}/>
          </Link>
        )}

        
      </div>

      {isOpen && (
        <div className='absolute top-full left-0 w-full bg-white flex flex-col text-center text-base py-4 sm:hidden'>
          <Link href="/#services" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Services</Link>
          <Link href="/#about" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>About</Link>
          <Link href="/#contact" className='w-full px-4 py-2 duration-200 hover:bg-headline hover:bg-opacity-80 hover:text-white'>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default Navbar