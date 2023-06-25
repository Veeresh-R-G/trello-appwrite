"use client";

import Image from 'next/image'
import React from 'react'
import Avatar from 'react-avatar';
// import { MagnifyingGlassIcon } from '@heroicons/react/outline'
import {UserCircleIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <>
        <div className="flex flex-col 
        md:flex-row p-5 items-center
         bg-gray-500/10 
         rounded-b-2xl">
            
            {/* Gradient */}
            <div className="absolute 
            top-0 left-0
            h-96
            w-full
            bg-gradient-to-br
            from-green-300 via-blue-500
            to-purple-600
            rounded-md
            filter
            blur-3xl
            opacity-50
            -z-50 ">

            </div>
            <div>
                <Image
                    src="https://links.papareact.com/c2cdd5"
                    alt="Treello logo"
                    width={300}
                    height={100}
                    className='w-44 md:w-56 pb-10 md:pb-0 object-contain'
                    />
            </div>

            {/* Search Box */}
            <div className='flex items-center space-x-5 flex-1 justify-end'>
                <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" placeholder="Search" className="flex-1 outline-none p-2"/>
                    <button type="submit" hidden>Search</button>
                </form>

                {/* Avatar */}
                <Avatar name="Veeresh R G" className="rounded-full bg-[] " size='50' color='#0C63DE' />
            </div>

            {/* Chat gpt Suggestion */}
           
        </div>
        <div className='flex items-center justify-center px-5 py-1 md:py-5'>
            
            <p className='flex items-center justify-center p-5  text-sm pr-6 text-blue-700/90 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl'>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-green-700/80">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
                    </svg>

                    GTP is Summarizing your tasks for your day...
            </p>
            
        </div>
    </>
  )
}

export default Header