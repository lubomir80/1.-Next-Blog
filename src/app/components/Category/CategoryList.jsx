import React from 'react'
import CategoryItem from './CategoryItem'
import categories from './data'

function CategoryList() {
   return (
      <>
         {categories && (
            <div>
               <h2 className='my-10 font-bold text-2xl'>Popular Categoies</h2>
               <div className='flex items-center justify-between gap-5 flex-wrap'>
                  {
                     categories.map(({ name }) =>
                        <CategoryItem key={name} name={name} />
                     )
                  }
               </div>
            </div>
         )}
      </>
   )
}

export default CategoryList