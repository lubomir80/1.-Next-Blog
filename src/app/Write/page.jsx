"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function WritePage() {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(false);

   return (
      <div>
         <input className='p-12 text-3xl border-0 outline-0 bg-transparent placeholder:text-slate-400' placeholder='Title' />

         <div className='flex gap-5 h-[700px] relative '>
            <button
               className="bg-green-400 hover:bg-green-500 border-2 rounded-full flex justify-center items-center w-12 h-12"
               onClick={() => setOpen(!open)} >{!open ? "+" : "-"}</button>
            {open && (
               <div className='flex gap-5 bg-white dark:bg-darkBg absolute w-full z-50 left-[68px] top-0'>
                  <button className='w-12 h-12 border-2 dark:bg-slate-500 dark:hover:bg-slate-400 border-slate-600 rounded-full flex justify-center items-center'>
                     <Image src="/add.png" alt='' width={32} height={32} />
                  </button>
                  <button className='w-12 h-12 border-2 dark:bg-slate-500 dark:hover:bg-slate-400 border-slate-600 rounded-full flex justify-center items-center'>
                     <Image src="/image.png" alt='' width={32} height={32} />
                  </button>
                  <button className='w-12 h-12 border-2 dark:bg-slate-500 dark:hover:bg-slate-400 border-slate-600 rounded-full flex justify-center items-center'>
                     <Image src="/video.png" alt='' width={32} height={32} />
                  </button>
               </div>
            )}
            <ReactQuill
               className='width-full'
               theme="bubble"
               value={value}
               onChange={setValue}
               placeholder='Tell your story...' />
         </div>
         <button className='absolute top-7 right-7 border-0 bg-green-400 hover:bg-green-500 cursor-pointer px-3 py-2 rounded-md'>Publish</button>
      </div>
   )
}

export default WritePage