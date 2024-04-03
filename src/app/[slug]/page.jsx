import Image from 'next/image'
import React from 'react'
import Menu from '../components/Menu/Menu'
import Comments from '../components/Comments/Comments'
import User from '../components/User'

function SinglePage() {
   return (
      <div className='mt-12 '>

         <div className='flex gap-12'>
            <div className='tablet:basis-1/2 flex flex-col justify-between'>
               <h1 className='
               font-bold mb-12 text-3xl tablet:text-4xl laptop:text-5xl'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, iste.
               </h1>
               <User user="Ivan Rakitić" date="03.04.2024" />
            </div>
            <div className='hidden basis-1/2 tablet:block h-[350px] relative'>
               <Image src="/p1.jpeg" alt="" fill className='object-cover' />
            </div>
         </div>

         <div className='flex gap-12'>
            <div className='laptop:basis-4/6 '>
               <div className='mt-20 text-xl [&>p]:mb-5'>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel ut! Velit similique aliquam tenetur tempora possimus? Totam id nobis repellat blanditiis earum, incidunt tenetur iure. Eligendi ex assumenda quasi!
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, vel ut! Velit similique aliquam tenetur tempora possimus? Totam id nobis repellat blanditiis earum, incidunt tenetur iure. Eligendi ex assumenda quasi!
                  </p>
               </div>
               <Comments />
            </div>
            <Menu />
         </div>
      </div>
   )
}

export default SinglePage