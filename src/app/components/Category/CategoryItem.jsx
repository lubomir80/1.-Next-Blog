import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import pickBgColors from "../../helpers/PickBgColors"

function CategoryItem({ name, small }) {
   return (
      <>
         {
            !small ?
               (
                  <Link
                     key={name}
                     href="/blog?cat=style"
                     className={`${pickBgColors(name)} flex items-center gap-2 capitalize h-20 justify-center rounded-md  w-[100%] phone:w-[45%] tablet:w-[25%] desktop:w-[15%] dark:text-stone-900 `}>
                     <Image className='h-8 full rounded-full' src={`/${name}.png`} alt='style' width={32} height={32} />
                     {name}
                  </Link>
               ) :
               (
                  <Link
                     key={name}
                     href="/blog?cat=style"
                     className={`${pickBgColors(name)} desktop:w-[25%] text-center rounded-md capitalize px-2 py-1 dark:text-stone-900 `}>
                     {name}
                  </Link>
               )
         }
      </>
   )
}

export default CategoryItem