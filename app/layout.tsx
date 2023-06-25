import './globals.css'
import { Inter } from 'next/font/google'


export const metadata = {
  title: 'Trello AI Clone',
  description: 'Created by Veeresh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-[#F5f6f8]'>{children}</body>
    </html>
  )
}
