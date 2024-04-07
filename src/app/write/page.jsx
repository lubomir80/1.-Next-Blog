"use client"

import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function WritePage() {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(false);

   return (
      <div>
         Hello
         <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
   )
}

export default WritePage