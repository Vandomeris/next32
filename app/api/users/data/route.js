import { PrismaClient } from "@prisma/client"

export async function POST(request) {
    const data = await request.json()
    console.log(data);
    const prisma = new PrismaClient()

    const resp = await prisma.users.update({
        where: {
            id: parseInt(data.id)
        },

        data: {
            name: data.name,
            email: data.email,
            userName: data.userName,
            age: parseInt(data.age),
            phone: data.phone
        }
    })

    return Response.json({
        result: 'ok'
    })

}