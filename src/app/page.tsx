// 'use client'
import Image from 'next/image'
import { Button } from '@/app/ui/button'
import UserCard from "@/app/ui/UserCard"
import { getAuthSession } from './lib/nextAuth'

export default async function Home() {
  const session=await getAuthSession()
  return (
    <>
    <h1>Home</h1>
    <Button className='font-extrabold'>Hello World</Button>
    {session?(
      <div>
        <h2>Session Activated</h2>
        <UserCard user={session?.user} pageType={"Home"}/>
      </div>
    ):(
      <div className='flex md:flex-col lg:flex-row gap-4 flex-wrap justify-center items-center'>
        <h2 className='font-bold text-4xl'>Session Not Activated</h2>
        <h2 className='font-bold text-4xl text-slate-500'>Please Sign in to get activated</h2>
      </div>
    )}
    </>
  )
}
