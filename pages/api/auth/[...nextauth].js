import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { useDropzone } from "react-dropzone"


export default NextAuth({

    providers: [
        CredentialsProvider({
            name: 'Credentials',

            async authorize(credentials) {
            
                const res = await axios.post(`${process.env.APP_URL}/api/auth/signin`, credentials)

                const user = res.data

                if (user) {
                return user
                } else {
                  return null
                }
            }
        })
    ],

    session: {
        jwt: true,
    },

    jwt: {
        secret: process.env.JWT_TOKEN,
    },

    callbacks: {
      jwt: async ({ user, token }) => {
        if (user) {
          token.uid = user._id;
        }
        return token;
      },
      session: async ({ session, token }) => {
        if (session?.user) {
          session.userId = token.uid;

        }
        return session;
      },
    },

      pages:{
        error: '/auth/signin'
      },

    database: process.env.MONGODB_URI,

})