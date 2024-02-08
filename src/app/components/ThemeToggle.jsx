"use client";

import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';


function ThemeToggle() {
   const { themeToggle } = useContext(ThemeContext);

   return (
      <div onClick={themeToggle}
         className='w-10 h-5 rounded-full cursor-pointer flex items-center justify-around bg-black dark:bg-white relative'>
         <Image src="/moon.png" alt="" width={14} height={14} />
         <div className="w-3 h-3 rounded-full bg-darkText absolute 
         right-1 dark:left-1 dark:bg-darkBg" />
         <Image src="/sun.png" alt="" width={14} height={14} />
      </div>
   )
}

export default ThemeToggle