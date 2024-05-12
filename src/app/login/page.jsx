"use client"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

function LoginPage() {

   const { data, status } = useSession()
   const router = useRouter()

   if (status === "loading") {
      return <div>Loading...</div>
   }
   if (status === "authenticated") {
      router.push("/")
   }
   // console.log(data, status);

   return (
      <div className='flex items-center justify-center mt-12'>
         <div className='px-10 py-14 phone:p-20 tablet:p-32 bg-slate-200 dark:bg-slate-600  flex flex-col justify-center items-center gap-12 rounded-md'>
            <button
               onClick={() => signIn("google")}
               className='w-[190px] px-4 py-2 tablet:px-4  cursor-pointer  bg-red-400 rounded-md text-white text-center'>Sign in with Google</button>
            <button className='w-[190px] px-4 py-2 tablet:px-4  cursor-pointer  bg-slate-800 rounded-md text-white text-center'>Sign in with Github</button>
            <button className='w-[190px] px-4 py-2 tablet:px-4  cursor-pointer  bg-blue-600 rounded-md text-white text-center'>Sign in with Facebook</button>
         </div>
      </div>
   )
}

export default LoginPage