import React from 'react'
import FooterLink from './FooterLink'

function FooterLinksList({ links }) {
   return (
      <div>
         {links &&
            (<>
               <h4 className='font-bold mb-3'>{links.title}</h4>
               <ul className='flex flex-col gap-2'>
                  {links.links.map(({ href, link }) =>
                     <FooterLink key={link} href={href} link={link} />)}
               </ul>
            </>)
         }
      </div>
   )
}

export default FooterLinksList