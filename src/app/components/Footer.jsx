import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
   return (
      <div className='flex mt-10 py-5'>
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
         <div className='basis-1/2 flex justify-end gap-16'>
            <ul className='flex flex-col gap-2'>
               <li className='font-bold'>Links</li>
               <li><Link href="/">Hompage</Link></li>
               <li><Link href="/">Blog</Link></li>
               <li><Link href="/">Contact</Link></li>
               <li><Link href="/">Hompage</Link></li>
            </ul>
            <ul className='flex flex-col gap-2'>
               <li className='font-bold'>Tags</li>
               <li><Link href="/">Style</Link></li>
               <li><Link href="/">Fashion</Link></li>
               <li><Link href="/">Coding</Link></li>
               <li><Link href="/">Travel</Link></li>
            </ul>
            <ul className='flex flex-col gap-2'>
               <li className='font-bold'>Social</li>
               <li><Link href="/">Facebook</Link></li>
               <li><Link href="/">Instagram</Link></li>
               <li><Link href="/">Tiktok</Link></li>
               <li><Link href="/">Youtube</Link></li>
            </ul>
         </div>
      </div>
   )
}

export default Footer