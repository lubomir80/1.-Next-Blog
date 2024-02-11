import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import ThemeToggle from './ThemeToggle'

function Navbar() {
   return (
      <header className='flex items-center justify-between h-[100px]'>
         <div className='hidden laptop:flex flex-1 gap-2'>
            <Image src="/facebook.png" alt='facebook' width={24} height={24} />
            <Image src="/instagram.png" alt='instagram' width={24} height={24} />
            <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
            <Image src="/youtube.png" alt='youtube' width={24} height={24} />
         </div>
         <div className='
         flex-1 font-bold text-left text-2xl dark:text-white
         laptop:text-3xl laptop:text-center
         desktop:text-4xl
         
         
         '>Myblog</div>
         <nav className='flex-1 flex items-center gap-6 text-lg justify-end 
         desktop:text-xl desktop:gap-3.5 dark:text-white'>
            <ThemeToggle />
            <Link className='hidden phone:block ' href="/">Homepage</Link>
            <Link className='hidden phone:block ' href="/">Contact</Link>
            <Link className='hidden phone:block ' href="/">About</Link>
            <AuthLinks />
         </nav>
      </header>
   )
}

export default Navbar

