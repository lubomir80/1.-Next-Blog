import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import ThemeToggle from './ThemeToggle'
import SocialMedia from './SocialMedia'

function Navbar() {
   return (
      <header className='flex items-center justify-between h-[100px] '>
         <SocialMedia className='hidden laptop:flex flex-1 gap-2' iconSize={24} />
         <div className='
         flex-1 font-bold text-left text-2xl dark:text-white
         laptop:text-3xl laptop:text-center
         desktop:text-4xl
         '>Myblog</div>
         <nav className='flex-1 flex items-center gap-3 text-lg justify-end 
         desktop:text-xl desktop:gap-3.5 '>
            <ThemeToggle />
            <Link className='hidden phone:block ' href="/">Homepage</Link>
            <Link className='hidden phone:block ' href="/">Contact</Link>
            <Link className='hidden phone:block ' href="/write">Write</Link>
            <Link className='hidden phone:block ' href="/">About</Link>
            <AuthLinks />
         </nav>
      </header>
   )
}

export default Navbar

