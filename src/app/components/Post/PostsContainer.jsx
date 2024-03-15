import React from 'react'

function PostsContainer({ children, title, subtitle }) {
   return (
      <div className='basis-2/6 mt-10'>
         {subtitle && <h4 className='text-stone-400'>{subtitle}</h4>}
         {title && <h2 className='font-bold text-2xl'>{title}</h2>}
         <div className='mt-3 mb-5'>
            {children}
         </div>
      </div>
   )
}

export default PostsContainer