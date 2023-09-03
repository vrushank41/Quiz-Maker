"use client";
import React from "react";
import { useState } from "react";

import Link from "next/link";

type Props = {};

function ResponsiveNav({}: Props) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };
  return (
    <nav className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white">
              Home
            </Link>
          </div>
          <div className="hidden md:inline-block">
            <div className="ml-4 flex items-center space-x-4">
              <Link
                href="/client"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Client
              </Link>
              <Link
                href="/server"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Server
              </Link>
              <Link
                href="/api/auth/signin"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Sign In
              </Link>
              <Link
                href="/api/auth/signout"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Sign Out
              </Link>
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={handleClick}
            >
              {isClick ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && 
        <div className="md:hidden">
            <div className="px-auto pt-2 pb-3 space-y-1 sm:px-3">
            <div className="mx-auto flex items-center justify-center space-x-4">
              <Link
                href="/client"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Client
              </Link>
              <Link
                href="/server"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Server
              </Link>
              <Link
                href="/api/auth/signin"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Sign In
              </Link>
              <Link
                href="/api/auth/signout"
                className="text-white hover:bg-white hover:text-black rounded-lg p-2"
              >
                Sign Out
              </Link>
            </div>
            </div>
        </div>
      }
    </nav>
  );
}

export default ResponsiveNav;
