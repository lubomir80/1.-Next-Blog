import React from 'react'
import PostsContainer from '../Post/PostsContainer'
import CategoryItem from './CategoryItem'
import categories from "./data"

const getData = async (page) => {
   const res = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store"
   })

   if (!res.ok) {
      throw new Error("Fetch data failed")
   }
   return res.json()
}



const CategoryMenuList = async () => {
   const categ = await getData()


   return (
      <>
         {categories && (
            <PostsContainer title="Categories" subtitle="Discover by topic">
               <div className='flex flex-wrap gap-4'>
                  {categories.map(({ name }) =>
                     <CategoryItem key={name} name={name} small={true} />
                  )}
               </div>
            </PostsContainer>
         )}
      </>
   )
}

export default CategoryMenuList