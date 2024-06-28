import * as mongoose from "mongoose";
import User from '@/models/User'
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: 'credentials',
      credentials: {
        username: { label: "Email", type: "email", placeholder: "test@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const {email, password} = credentials;
        
        mongoose.connect(process.env.MONGO_URL);
        const user = User.findOne({email});
        if (user && bcrypt.compareSync(password, user.password)) {

        }

        return null
      }
    })
  ],
});

export { handler as GET, handler as POST}