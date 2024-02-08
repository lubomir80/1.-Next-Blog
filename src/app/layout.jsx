import { useContext } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ThemeContextProvider } from './context/ThemeContext'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeProvider from './provider/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Blog App',
   description: 'Best App!',
}


export default function RootLayout({ children }) {

   return (
      <html lang="en">
         <body className={inter.className}>
            <ThemeContextProvider>
               <ThemeProvider>
                  <div className='
                  min-h-[100vh] mx-auto bg-white text-black
                  dark:bg-darkBg dark:text-darkText'>
                     <div className='
                        mx-auto 
                        desktop-md:max-w-1366
                        desktop:max-w-1024
                        desktop:px-20
                        laptop:max-w-768
                        tablet:max-w-640
                        max-w-475 px-10'>
                        <Navbar />
                        {children}
                        <Footer />
                     </div>
                  </div>
               </ThemeProvider>
            </ThemeContextProvider>
         </body>
      </html>
   )
}
