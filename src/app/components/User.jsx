import Image from 'next/image'
import React from 'react'

function User({ srcImg, user, date }) {
   return (
      <div>
         <div className='flex items-center gap-4'>
            <div className='h-12 w-12 relative rounded-full overflow-hidden'>
               <Image src={srcImg ? srcImg : "/p1.jpeg"} alt="" fill className='object-cover' />
            </div>
            <div className='flex flex-col ga-2'>
               <span className='font-medium'>{user}</span>
               <span className='text-sm'>{date}</span>
            </div>
         </div>
      </div>
   )
}

export default User