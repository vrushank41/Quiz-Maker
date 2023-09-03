'use client'

import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

type Props = {}

const AuthProvider = ({children}:{children:React.ReactNode} )=> {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider