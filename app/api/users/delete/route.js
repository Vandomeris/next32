import { PrismaClient } from "@prisma/client"

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const prisma = new PrismaClient()

    const resp = await prisma.users.delete({
        where: {
            id: parseInt(id)
        }
    })


    return Response.json({
        result: 'ok'
    })
}