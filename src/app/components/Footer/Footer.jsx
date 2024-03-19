import Image from 'next/image'
import React from 'react'
import FooterList from './FooterList'
import FooterLink from './FooterLink'
import Links from "./Date"

function Footer() {
   return (
      <div className='flex flex-col gap-16 mt-10 py-5 laptop:flex-row '>
         <div className='basis-1/2 flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
               <div className='w-10 h-10 rounded-full bg-red-200 flex items-center justify-center'>Logo</div>
               <h2 className='font-bold text-2xl'>MyBlog</h2>
            </div>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quam et esse sapiente rerum at suscipit magni? Totam unde nam expedita alias autem nisi minus aspernatur rem reiciendis! Soluta, accusamus.
            </p>
            <div className='flex items-center gap-2'>
               <Image src="/facebook.png" alt='' width={18} height={18} />
               <Image src="/instagram.png" alt='' width={18} height={18} />
               <Image src="/tiktok.png" alt='' width={18} height={18} />
               <Image src="/youtube.png" alt='' width={18} height={18} />
            </div>
         </div>
         <div className='
         basis-1/2 flex gap-6 justify-between 
         laptop:justify-end laptop:gap-16 desktop:gap-24'>
            {Links && Links?.map(({ title, list }) => {
               return (
                  <FooterList title={title} key={title}>
                     {list?.map(({ href, name }) =>
                        <FooterLink href={href} name={name} />)}
                  </FooterList>
               )
            })}
         </div>
      </div>
   )
}

export default Footer