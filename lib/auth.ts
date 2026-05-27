import { NextAuthOptions, User } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


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
  async signIn() {
    return true  // allow everyone to sign in
  },
  async session({ session }) {
    return session  // pass session through
  }
}
}