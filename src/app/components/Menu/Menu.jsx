import React from 'react'
import CategoryMenuList from '../Category/CategoryMenuList'
import MostPopularMenuList from './MostPopularMenuList'
import EditorPickMenuList from './EditorPickMenuList'


function Menu() {
   return (
      <div className={`hidden basis-2/6 mt-10 laptop:block`}>
         <MostPopularMenuList />
         <CategoryMenuList />
         <EditorPickMenuList />
      </div>
   )
}

export default Menu