import React from 'react'
import Pagination from './Pagination'
import Post from './Post/Post'

const getData = async (page) => {
   const res = await fetch(`http://localhost:3000/api/posts`, {
      cache: "no-store"
   })

   if (!res.ok) {
      throw new Error("Fetch data failed")
   }
   return res.json()
}



const CardList = async () => {
   const posts = await getData()


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