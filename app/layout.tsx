import './globals.css'

import { Figtree, Inter } from 'next/font/google'
import 'easymde/dist/easymde.min.css'
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
      <body>
        <Providers> 
        {children}
       </Providers>
      </body>
    </html>
  )
}
