import { PrismaClient } from "@prisma/client"

export async function POST(request) {
    const data = await request.json()
    const ageMap = {
        'young': [1, 30],
        'middle': [31, 50],
        'old': [51, 99]
    }

    const ageRange = ageMap[data.ageType]

    const client = new PrismaClient()

    const response = await client.users.findMany({
        where: {
            AND: [
                {
                    age: {
                        gte: ageRange[0]
                    },
                },
                {
                    age: {
                        lte: ageRange[1]
                    },
                },

            ]

        }
    })

    return Response.json(response)
}