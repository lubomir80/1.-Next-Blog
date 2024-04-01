import React from 'react'
import CardList from '../components/CardList'
import Menu from '../components/Menu/Menu'

function page() {
   return (
      <div>
         <h1 className='border-0 p-4 bg-red-500 text-white cursor-pointer text-2xl text-center'>Style Blog</h1>
         <div className='flex gap-16 '>
            <CardList />
            <Menu />
         </div>
      </div>
   )
}

export default page