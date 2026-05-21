import { NextAuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const allowedEmails = [
  'vincy.lenguyen@gmail.com',  // replace with your actual email
  'vincykat@gmail.com', //staff email for login dashboard
]

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
    params: {
      prompt: 'select_account'
    } //This forces the account chooser every time, better UX for a staff login .
  }
    })
  ],
  callbacks: {
    async signIn({ user }: { user: User }) {
      return allowedEmails.includes(user.email ?? '')
    }
  }
}