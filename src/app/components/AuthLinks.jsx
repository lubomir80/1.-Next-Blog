"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import BurgerBtn from './BurgerBtn';
import { useToggle } from '../hooks/useToggle';
import { signOut, useSession } from 'next-auth/react';

function AuthLinks() {
   // const status = "notauthenticated"
   const { isOpen, toggle } = useToggle()
   const { data, status } = useSession()



   useEffect(() => {
      isOpen ? (document.body.style.overflow = 'hidden') :
         (document.body.style.overflow = '')
   }, [isOpen])

   return (
      <>
         {status === "unauthenticated" ? (
            <Link className='hidden phone:block' href="/login">Login</Link>
         ) : (
            <>
               <Link className='hidden phone:block' href="/write">Write</Link>
               <span onClick={signOut} className='cursor-pointer flex-col justify-between'>
                  Logout
               </span>
            </>
         )}
         <BurgerBtn isOpen={isOpen} toggle={toggle} />
         {isOpen && (
            <div className='
            phone:hidden
            absolute top-[100px] left-0 h-[calc(100vh-100px)]
            w-full flex items-center justify-center  flex-col
            gap-12 text-3xl bg-white dark:bg-darkBg  
            z-[100]
            '>
               <Link href="/">Homepage</Link>
               <Link href="/">Contact</Link>
               <Link href="/">About</Link>

               {status === "unauthenticated" ? (
                  <Link href="/login">Login</Link>
               ) : (
                  <>
                     <Link href="/write">Write</Link>
                     <span onClick={signOut} className='cursor-pointer flex-col justify-between '>
                        Logout
                     </span>
                  </>
               )}
            </div>
         )}
      </>
   )
}

export default AuthLinks