import React from 'react'
import User from '../User'

function Comment({ children }) {

   return (
      <div>
         <User user={"Test User"} date={"03.04.2024"} />
         {children && <p className='mt-2'>{children}</p>}
      </div>
   )
}

export default Comment