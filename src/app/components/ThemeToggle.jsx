import Image from 'next/image'
import React from 'react'

function ThemeToggle() {
   return (
      <div className='w-10 h-5 rounded-full cursor-pointer flex items-center justify-around bg-black relative'>
         <Image src="/moon.png" alt="" width={14} height={14} />
         <div className='w-3 h-3 rounded-full bg-bg-white absolute left-1' />
         <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
   )
}

export default ThemeToggle