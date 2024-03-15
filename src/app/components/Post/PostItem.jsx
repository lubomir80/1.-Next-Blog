import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function PostItem({ image }) {
   return (
      <Link href="/" className='flex items-center gap-4'>
         {image && (
            <div className='basis-1/5 relative aspect-square'>
               <Image className='rounded-full border-2 border-solid border-stone-200' src="/p1.jpeg" alt='' fill />
            </div>
         )}
         <div className='basis-4/5 flex flex-col gap-1.5 '>
            <span className='rounded-md px-2 py-1 bg-orange-200 w-max text-white tracking-wider'>Travel</span>
            <h3 className='font-bold text-sm dark:text-slate-200 '>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum illum non</h3>
            <div>
               <span className='text-sm'>Jhon Doe - </span>
               <span className='text-sm text-stone-400'>10.03.2023</span>
            </div>
         </div>
      </Link>
   )
}

export default PostItem