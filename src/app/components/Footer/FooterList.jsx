import React from 'react'

function FooterList({ children, title }) {
   return (
      <div>
         <h4 className='font-bold'>{title}</h4>
         <ul className='flex flex-col gap-2 mt-2'>
            {children}
         </ul>
      </div>
   )
}

export default FooterList