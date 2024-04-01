import React from 'react'
import Pagination from './Pagination'
import Post from './Post/Post'

function CardList() {
   return (
      <div className='basis-100% laptop:basis-4/6'>
         <h2 className='font-bold text-2xl my-12'>
            Recent Posts
         </h2>
         <div className='flex flex-col gap-10'>
            <Post />
            <Post />
            <Post />
         </div>
         <Pagination />
      </div>
   )
}

export default CardList