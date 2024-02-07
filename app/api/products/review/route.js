import { PrismaClient } from "@prisma/client"

export async function PUT(request) {
    const body = await request.formData()
    const json = Object.fromEntries(body)
    console.log(json);
    const prisma = new PrismaClient()

    const resp = await prisma.reviews.create({
        data: {
            text: json.text,
            mark: parseInt(json.mark),
            productsId: parseInt(json.productId)
        }
    })


    return Response.json({})
}