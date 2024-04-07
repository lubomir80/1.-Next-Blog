"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import AddButton from '../components/AddButton';


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function WritePage() {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(false);

   return (
      <div className='relative'>
         <input className='w-full p-12 pb-8 text-3xl border-0 outline-0 bg-transparent placeholder:text-slate-400' placeholder='Title' />

         <div className='flex flex-col gap-5 h-[700px] relative '>
            <AddButton
               className="bg-green-400 hover:bg-green-500 "
               onClick={() => setOpen(!open)} >
               {!open ? "+" : "-"}
            </AddButton>
            {open && (
               <div className='flex gap-5 bg-transparent absolute w-full z-50 left-[68px] top-0'>
                  <AddButton className="dark:bg-slate-500 dark:hover:bg-slate-400 bg-white border-slate-600">
                     <Image src="/add.png" alt='' width={32} height={32} />
                  </AddButton>
                  <AddButton className="dark:bg-slate-500 dark:hover:bg-slate-400 bg-white border-slate-600">
                     <Image src="/img.png" alt='' width={32} height={32} />
                  </AddButton>
                  <AddButton className="dark:bg-slate-500 dark:hover:bg-slate-400 bg-white border-slate-600">
                     <Image src="/video.png" alt='' width={32} height={32} />
                  </AddButton>
               </div>
            )}
            <ReactQuill
               className='flex-1'
               theme='snow'
               value={value}
               onChange={setValue}
               placeholder='Tell your story...'
            />
         </div>
         <button className='absolute 
         top-0 right-0 
         border-0 bg-green-400 hover:bg-green-500  px-3 py-2 rounded-md'>Publish</button>

      </div>
   )
}

export default WritePage