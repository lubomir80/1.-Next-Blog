import React from 'react'

function Pagination() {
   return (
      <div className='flex justify-between mt-10'>
         <button className='w-24 border-0 p-4 bg-red-500 text-white cursor-pointer'>Previus</button>
         <button className='w-24 border-0 p-4 bg-red-500 text-white cursor-pointer'>Next</button>
      </div>
   )
}

export default Pagination