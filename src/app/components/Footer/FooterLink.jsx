import Link from 'next/link'
import React from 'react'

function FooterLink({ href, link }) {
   return (
      <li><Link href={href}>{link}</Link></li>
   )
}

export default FooterLink