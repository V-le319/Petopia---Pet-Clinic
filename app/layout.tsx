import './globals.css'

import { Figtree, Inter, Geist } from 'next/font/google'

import Providers from './providers'
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="relative min-h-screen bg-[url('/images/wallpaper.jpg')] bg-cover bg-center bg-fixed">
        <Providers> 
        {children}
       </Providers>
      </body>
    </html>
  )
}
