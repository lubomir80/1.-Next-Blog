"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import BurgerBtn from './BurgerBtn';

function AuthLinks() {
   const status = "notauthenticated"

   const [open, setOpen] = useState(false);

   return (
      <>
         {status === "notauthenticated" ? (
            <Link className='hidden phone:block' href="/login">Login</Link>
         ) : (
            <>
               <Link className='hidden phone:block' href="/write">Write</Link>
               <span className='cursor-pointer flex-col justify-between'>
                  Logout
               </span>
            </>
         )}
         <BurgerBtn open={open} setOpen={setOpen} />
         {open && (
            <div className='
            phone:hidden
            absolute top-[100px] left-0 h-[calc(100vh-100px)]
            w-full flex items-center justify-center  flex-col
            gap-12 text-3xl bg-white dark:bg-darkBg 
            '>
               <Link href="/">Homepage</Link>
               <Link href="/">Contact</Link>
               <Link href="/">About</Link>

               {status === "notauthenticated" ? (
                  <Link href="/login">Login</Link>
               ) : (
                  <>
                     <Link href="/write">Write</Link>
                     <span className='cursor-pointer flex-col justify-between '>
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