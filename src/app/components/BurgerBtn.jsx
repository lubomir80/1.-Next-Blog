import React from 'react'

function BurgerBtn({ isOpen, toggle }) {
   return (
      <button
         onClick={toggle}
         className='phone:hidden
      w-5 h-4 flex justify-between flex-col cursor-pointer'>
         <span className={`transition-transform w-full h-0.5 bg-black dark:bg-white ${isOpen && "-rotate-45 translate-y-[7px]"}`} />
         <span className={`transition-colors w-full block h-0.5 bg-black dark:bg-white  ${isOpen ? "opacity-0" : "opacity-100"}`} />
         <span className={`transition-transform w-full h-0.5 bg-black dark:bg-white ${isOpen && "rotate-45 -translate-y-[7px]"}`} />
      </button>
   )
}

export default BurgerBtn