import React from 'react'
import CardList from '../components/CardList'
import Menu from '../components/Menu/Menu'

function BlogPage() {
   return (
      <>
         <h2 className='font-bold text-xl text-white bg-red-500
         p-1 text-center'>
            Style Blog
         </h2>
         <div className="flex gap-12">
            <CardList />
            <Menu />
         </div>
      </>
   )
}

export default BlogPage