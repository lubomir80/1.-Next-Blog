import React from 'react'

function CommentInput() {
   return (
      <div className='flex items-center gap-5'>
         <textarea
            className='p-2 w-full bg-neutral-50'
            placeholder='Write your comment...'></textarea>
         <button className=' px-4 cursor-pointer py-2 bg-teal-500 rounded-md text-white'>
            Send</button>
      </div>
   )
}

export default CommentInput