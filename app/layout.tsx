import './globals.css'

import { Figtree, Inter } from 'next/font/google'
import 'easymde/dist/easymde.min.css'


const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}
       
      </body>
    </html>
  )
}
