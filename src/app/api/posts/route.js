import prisma from "@/app/utils/connect"
import { NextResponse } from "next/server";

export const GET = async () => {
   try {
      const posts = await prisma.post.findMany()
      // const [test, count] = prisma.$transaction([
      //    await prisma.post.findMany(),
      //    await prisma.post.count()
      // ])

      return new NextResponse(
         JSON.stringify(posts, { status: 200 })
      )
   } catch (error) {
      console.log(error);
      return new NextResponse(
         JSON.stringify({ message: "Something went wrong with data fetch" }, { status: 500 })
      )
   }
}