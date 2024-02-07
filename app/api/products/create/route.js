import { PrismaClient } from "@prisma/client";

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    const prisma = new PrismaClient()
    const resp = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            rating: parseFloat(data.rating),
            image: data.image.name
        }
    })
    return Response.json(resp)
}