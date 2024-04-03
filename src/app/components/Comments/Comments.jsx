import Link from 'next/link'
import React from 'react'
import Comment from './Comment'
import CommentInput from './CommentInput'


function Comments() {
   const status = "authenticated"

   return (
      <div className='flex flex-col gap-5 '>
         <h2 className='font-bold text-2xl mt-5'>Comments</h2>
         {status === "authenticated" ? <CommentInput />
            : <Link href="/login">Login to write a comment</Link>}
         <div className='flex flex-col gap-6 mt-5'>
            <Comment>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ratione laudantium omnis nostrum exercitationem itaque vitae repellat doloribus nemo fuga, ex id et ab aperiam, accusamus placeat facilis magni ea.</Comment>
            <Comment>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Comment>
            <Comment>Lorem ipsum dolor sit a adipisicing elit. Lorem ipsum dolor sit amet.</Comment>
         </div>
      </div>
   )
}

export default Comments