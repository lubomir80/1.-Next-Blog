import Image from 'next/image'
import Link from 'next/link'

function Post() {
   return (
      <div className='flex gap-10 items-center  '>
         <div className='flex-1 h-[350px] relative bg-white'>
            <Image className='object-cover' src="/p1.jpeg" alt="" fill />
         </div>
         <div className='flex-1 flex flex-col gap-5'>
            <div>
               <span className='text-stone-400'>11.02.2024 - </span>
               <span className='uppercase text-md text-orange-300' >Travel</span>
            </div>
            <h2 className='font-bold text-2xl'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <p className='font-light dark:text-slate-200 text-sm'>
               Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos atque non, provident vel placeat quos! Praesentium optio officiis quisquam aut quia dolor voluptates ipsum dolorem maiores perspiciatis. Qui dolore illum praesentium aperiam nisi harum, explicabo ipsa blanditiis, repellat impedit, dolor quod.</p>
            <Link className='
            border-solid  border-b-2 border-red-400 w-max py-1'
               href="/">
               Read More
            </Link>
         </div>
      </div>
   )
}

export default Post