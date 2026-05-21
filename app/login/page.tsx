

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const Login = () => {
  return (
    <>
    <div className='w-full h-screen  bg-headline flex justify-center items-center'>
      <Link href="/">
      <ArrowLeft className=" top-4 left-10 w-8 h-8 hover:scale-150 text-white cursor-pointer"/>
      </Link>

      <div className='login-card card-login_shadow'>
        <div className="mb-4 text-center">
        <h1 className='heading font-bold mb-1'>Petopia Staff</h1>
        <p className='text-sm text-text '>Log in to access admin dashboard.</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <label className='login-label'>username:</label>
        <input className="rounded-md px-2 h-10 text-base text-text"
                placeholder="Your username"/>

        <label className='login-label'>password:</label>
        <input className="px-2 rounded-md h-10 text-base text-text"
              placeholder="******"/>

      </div>

      <button className='w-full login-btn mt-6'>Log In</button>

      </div>
    </div>
    </>
  )
}

export default Login