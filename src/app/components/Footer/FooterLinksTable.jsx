import React from 'react'
import footerLinks from "./data"
import FooterLinksList from './FooterLinksList'

function FooterLinksTable() {
   return (
      <div className='laptop:gap-16 laptop:justify-end
      justify-between  basis-1/2 flex gap-8'>
         {footerLinks.map(item =>
            <FooterLinksList key={item.title} links={item} />)}
      </div>
   )
}

export default FooterLinksTable