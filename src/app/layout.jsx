import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Blog App',
   description: 'Best App!',
}



export default function RootLayout({ children }) {


   return (
      <html lang="en">
         <body className={inter.className}>
            <div className='min-h-full bg-bg-white text-textColor mx-auto'>
               <div className='
               mx-auto bg-red-100
               desktop-md:max-w-1366
               desktop:max-w-1024
               desktop:px-20
               laptop:max-w-768
               tablet:max-w-640
               max-w-475 px-10
               '>
                  <Navbar />
                  {children}
                  <Footer />
               </div>
            </div>
         </body>
      </html>
   )
}
