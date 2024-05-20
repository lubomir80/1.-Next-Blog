import React from 'react'
import CategoryItem from './CategoryItem'
import categories from './data'

const getData = async (page) => {
   const res = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store"
   })

   if (!res.ok) {
      throw new Error("Fetch data failed")
   }
   return res.json()
}




const CategoryList = async () => {
   const categ = await getData()


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