import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryItem({ name, color, small }) {
   return (
      <>
         {
            !small ?
               (
                  <Link
                     key={name}
                     href="/blog?cat=style"
                     className={`flex items-center gap-2 capitalize h-20 justify-center rounded-md ${color} w-[100%] phone:w-[45%] tablet:w-[25%] desktop:w-[15%] dark:text-stone-900 `}>
                     <Image className='h-8 full rounded-full' src={`/${name}.png`} alt='style' width={32} height={32} />
                     {name}
                  </Link>
               ) :
               (
                  <Link
                     key={name}
                     href="/blog?cat=style"
                     className={`desktop:w-[25%] text-center rounded-md capitalize px-2 py-1 dark:text-stone-900 ${color}`}>
                     {name}
                  </Link>
               )
         }
      </>
   )
}

export default CategoryItem