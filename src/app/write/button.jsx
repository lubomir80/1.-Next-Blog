import React from 'react'

function Button({ className, onClick, children }) {
   return (
      <button className={`
      ${className} 
      w-12 h-12 border-2
      rounded-full flex justify-center items-center
      `} onClick={onClick} >
         {children}
      </button>
   )
}

export default Button