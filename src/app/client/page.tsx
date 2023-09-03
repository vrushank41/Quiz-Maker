'use client'
import React from 'react'
import {useSession} from 'next-auth/react'
import {redirect} from 'next/navigation'
import UserCard from '../ui/UserCard'


export default function Client() {
    const {data:session,status}=useSession({
        required:true,
        onUnauthenticated(){
            redirect("/api/auth/signin?callback=/client")
        }
    })
    
    return (
        <div>
            <h1>Client</h1>
            <UserCard user={session?.user} pageType={"Client"}/>
        </div>
    )
}