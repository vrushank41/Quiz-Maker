import Link from "next/link"

import { getAuthSession } from "../lib/nextAuth"
import { useState } from "react"
import ResponsiveNav from "./ResponsiveNav"


export default async function Navbar() {
    const session=await getAuthSession()

    return (
        <>
        <ResponsiveNav/>
        {session?(
            <nav className="bg-green-600 p-4">
        <ul className="flex justify-evenly text-2xl font-bold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/api/auth/signin">Sign In</Link></li>
            <li><Link href="/api/auth/signout">Sign Out</Link></li>
            <li><Link href="/server">Server</Link></li>
            <li><Link href="/client">Client</Link></li>
        </ul>
    </nav>
    ):(
    <nav className="bg-red-600 p-4">
    <ul className="flex justify-evenly text-2xl font-bold">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/api/auth/signin">Sign In</Link></li>
        <li><Link href="/api/auth/signout">Sign Out</Link></li>
        <li><Link href="/server">Server</Link></li>
        <li><Link href="/client">Client</Link></li>
    </ul>
</nav>
)}
</>
        
    )
}