import axios from "axios"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


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
      jwt:({token,user})=>{
        if(user){
          token.id = user.userId;
        }
        return token;
      },
      session:({session,token}) =>{
        if(token){
          session.user.id = token.id;
        }
        return session;
      },
    },

      pages:{
        error: '/auth/signin'
      },

    database: process.env.MONGODB_URI,

})