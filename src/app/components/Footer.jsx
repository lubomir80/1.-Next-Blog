import React from 'react'
import SocialMedia from './SocialMedia'
import FooterLinksTable from './Footer/FooterLinksTable'

function Footer() {
   return (
      <div className='flex flex-col  mt-10 py-5 gap-8
      laptop:flex-row laptop:gap-16'>
         <div className='basis-1/2 flex flex-col gap-6 '>
            <div className='flex items-center gap-2'>
               <div className='w-10 h-10 rounded-full bg-red-200 flex items-center justify-center'>Logo</div>
               <h2 className='font-bold text-2xl'>MyBlog</h2>
            </div>
            <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis quam et esse sapiente rerum at suscipit magni? Totam unde nam expedita alias autem nisi minus aspernatur rem reiciendis! Soluta, accusamus.
            </p>
            <SocialMedia className="flex items-center gap-2" iconSize={18} />
         </div>
         <FooterLinksTable />
      </div>
   )
}

export default Footer