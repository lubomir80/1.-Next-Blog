import Image from 'next/image'
import React from 'react'

function Featured() {
   return (
      <div className='mt-8'>
         <h1 className='text-8xl'>
            <b>Hey there! </b>
            Discover my stories and creative ideas.
         </h1>
         <div className='mt-14 flex items-center gap-8'>
            <div className='flex-1 h-[500px] relative'>
               <Image className='object-cover' src="/p1.jpeg" alt='' fill />
            </div>
            <div className='flex-1 flex flex-col gap-5'>
               <h2 className='text-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h2>
               <p className='text-xl font-light text-black dark:text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium blanditiis quos, tempora id quod distinctio porro, ipsa, magni odit eligendi vero veritatis? Labore ipsa a laboriosam enim nisi modi, perferendis nulla eos? Vero vitae quam cumque?</p>
               <button className='px-5 py-4 border-0 rounded-md bg-slate-100 text-black  max-w-max hover:bg-slate-200 transition-colors duration-150 '>Read more</button>
            </div>
         </div>
      </div>
   )
}

export default Featured