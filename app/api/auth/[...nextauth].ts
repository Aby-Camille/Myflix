import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";

import prismadb from "@/lib/prismadb";


//Configuration of NextAuth with Credentials provider based on email and password.
export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            },
            //Validation of credentials.
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password required');
                }

                //Looking for user in database.
                const user = await prismadb.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                //Checking user, password and compare.
                if (!user || !user.hashedPassword) {
                    throw new Error('Email does not exist');
                }

                const IsCorrectPassword = await compare(credentials.password, user.hashedPassword);
                if (!IsCorrectPassword) {
                    throw new Error ('Incorrect Password');
                }

                return user;
            }
        })
    ],

    //Definite connection page path, debug and token.
    pages: {
        signIn: '/login',
    },
    debug: process.env.NODE_ENV === 'development',
    adapter: PrismaAdapter(prismadb),
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});