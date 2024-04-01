import React from 'react'
import Image from 'next/image'

function SocialMedia({ className, iconSize }) {
   return (
      <div className={className}>
         <Image src="/facebook.png" alt='facebook' width={iconSize} height={iconSize} />
         <Image src="/instagram.png" alt='instagram' width={iconSize} height={iconSize} />
         <Image src="/tiktok.png" alt='tiktok' width={iconSize} height={iconSize} />
         <Image src="/youtube.png" alt='youtube' width={iconSize} height={iconSize} />
      </div>
   )
}

export default SocialMedia