import React from 'react'
import PostsContainer from '../Post/PostsContainer'
import PostItem from '../Post/PostItem'

function MostPopularMenuList() {
   return (
      <PostsContainer title="Most Popular" subtitle="What's hot">
         <div className='flex flex-col gap-5'>
            <PostItem />
            <PostItem />
            <PostItem />
         </div>
      </PostsContainer>
   )
}

export default MostPopularMenuList