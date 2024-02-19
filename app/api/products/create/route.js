import { PrismaClient } from "@prisma/client";
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function PUT(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    const prisma = new PrismaClient()
    const image = data.image

    const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg', 'image/svg+xml']

    if (allowedTypes.includes(image.type)) {
        const bytes = await image.arrayBuffer()
        const buffer = Buffer.from(bytes)
        const path = join('public', 'images', 'products', data.price + image.name)
        await writeFile(path, buffer)
    }
    const resp = await prisma.products.create({
        data: {
            name: data.name,
            description: data.description,
            price: data.price,
            rating: parseFloat(data.rating),
            image: data.price + data.image.name
        }
    })
    return Response.json({})
}