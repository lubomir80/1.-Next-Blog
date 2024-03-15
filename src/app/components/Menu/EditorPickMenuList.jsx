import React from 'react'
import PostsContainer from '../Post/PostsContainer'
import PostItem from '../Post/PostItem'

function EditorPickMenuList() {
   return (
      <PostsContainer title="Editors Pick" subtitle="Chosen by the editor">
         <div className='flex flex-col gap-5'>
            <PostItem image={true} />
            <PostItem image={true} />
            <PostItem image={true} />
         </div>
      </PostsContainer >
   )
}

export default EditorPickMenuList