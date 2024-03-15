import React from 'react'
import PostsContainer from '../Post/PostsContainer'
import CategoryItem from './CategoryItem'
import categories from "./data"

function CategoryMenuList() {
   return (
      <>
         {categories && (
            <PostsContainer title="Categories" subtitle="Discover by topic">
               <div className='flex flex-wrap gap-4'>
                  {categories.map(({ color, name }) =>
                     <CategoryItem key={name} name={name} color={color} small={true} />
                  )}
               </div>
            </PostsContainer>
         )}
      </>
   )
}

export default CategoryMenuList