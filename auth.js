import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"
import Apple from "next-auth/providers/apple"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
})