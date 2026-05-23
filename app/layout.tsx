import './globals.css'

import { Figtree, Inter } from 'next/font/google'

import Providers from './providers'


const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-[url('/images/wallpaper.jpg')] bg-cover bg-center bg-fixed">
        <Providers> 
        {children}
       </Providers>
      </body>
    </html>
  )
}
