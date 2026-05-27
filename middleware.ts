import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const allowedEmails = [
  'vincy.lenguyen@gmail.com',
  'vincykat@gmail.com',
]

export default withAuth(
  function middleware(req) {
    const email = req.nextauth.token?.email
    if (!allowedEmails.includes(email ?? '')) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  },
  { callbacks: { authorized: ({ token }) => !!token } }
)

export const config = {
  matcher: ['/dashboard/:path*']
}