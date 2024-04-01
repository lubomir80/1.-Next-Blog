import Link from 'next/link'
import React from 'react'

function FooterLink({ href, name }) {
   return (
      <li><Link href={href}>{name}</Link></li>
   )
}

export default FooterLink