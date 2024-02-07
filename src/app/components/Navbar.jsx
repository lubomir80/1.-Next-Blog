import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthLinks from './AuthLinks'
import ThemeToggle from './ThemeToggle'

function Navbar() {
   return (
      <header className='flex items-center justify-between h-[100px] '>
         <div className='flex flex-1 gap-2'>
            <Image src="/facebook.png" alt='facebook' width={24} height={24} />
            <Image src="/instagram.png" alt='instagram' width={24} height={24} />
            <Image src="/tiktok.png" alt='tiktok' width={24} height={24} />
            <Image src="/youtube.png" alt='youtube' width={24} height={24} />
         </div>
         <div className='flex-1 text-center text-4xl font-bold'>myblog</div>
         <nav className='flex flex-1 gap-6 text-xl items-center'>
            <ThemeToggle />
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
            <AuthLinks />
         </nav>
      </header>
   )
}

export default Navbar