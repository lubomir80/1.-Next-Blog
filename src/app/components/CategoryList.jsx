
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories = [
   {
      color: "bg-blue-100",
      name: "style",
   },
   {
      color: "bg-red-100",
      name: "culture",
   },
   {
      color: "bg-orange-100",
      name: "travel",
   },
   {
      color: "bg-amber-100",
      name: "coding",
   },
   {
      color: "bg-lime-100",
      name: "food",
   },
   {
      color: "bg-green-100",
      name: "fashion",
   },
]

function CategoryList() {
   return (
      <div>
         <h2 className='my-10 font-bold text-2xl'>Popular Categoies</h2>
         <div className='flex items-center justify-between gap-5 flex-wrap'>
            {
               categories.map(({ color, name }) =>
                  <Link
                     key={name}
                     href="/blog?cat=style"
                     className={`flex items-center gap-2 capitalize h-20 justify-center rounded-md ${color}
                     w-[100%] phone:w-[45%] laptop:w-[25%] desktop:w-[15%]
                     dark:text-stone-900
                     `}>
                     <Image className='h-8 full rounded-full' src={`/${name}.png`} alt='style' width={32} height={32} />
                     {name}
                  </Link>)
            }
         </div>
      </div>
   )
}

export default CategoryList