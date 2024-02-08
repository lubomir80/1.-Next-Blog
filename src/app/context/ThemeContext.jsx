"use client"

import { createContext, useEffect, useState } from "react";


// FIXING ERROR

const getFromLocalStorage = () => {
   if (typeof window !== 'undefined') {
      const value = localStorage.getItem("theme")
      return value || "light"
   }
}

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
   const [theme, setTheme] = useState(() => {
      return getFromLocalStorage()
   });


   const themeToggle = () => {
      theme === "light" ? setTheme("dark") : setTheme("light")
   }


   useEffect(() => {
      localStorage.setItem("theme", theme)
   }, [theme])


   return (
      <ThemeContext.Provider value={{ theme, themeToggle }}>
         {children}
      </ThemeContext.Provider>)
}