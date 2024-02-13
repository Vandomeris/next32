import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthConfig = {

    session: {
        strategy: 'jwt'
    },
    providers: [CredentialsProvider({
        credentials: {
            email: {},
            password: {}
        },
        async authorize(credentials) {

            const prisma = new PrismaClient()
            const user = await prisma.users.findFirst({
                where: {
                    email: credentials.email
                }
            })

            const passCorrect = await compare(credentials.password, user.password)


            if (passCorrect) {
                console.log(passCorrect);

                return {
                    id: user.id,
                    email: user.email
                }
            }

            return null
        }
    })]
}