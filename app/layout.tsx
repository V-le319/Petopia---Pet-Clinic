import './globals.css'

import { Figtree, Inter, Geist } from 'next/font/google'

import Providers from './providers'
import { cn } from "@/lib/utils";
import { Toaster } from '@/components/ui/sonner';

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
      <body className="relative min-h-screen max-w-[100vw] overflow-x-hidden bg-[url('/images/wallpaper.jpg')] bg-repeat bg-auto bg-fixed">
        <Providers> 
        {children}
        <Toaster />
       </Providers>
      </body>
    </html>
  )
}
