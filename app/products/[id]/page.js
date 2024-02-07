import ProductPage from "@/components/products/ProductPage"
import ProductPageReviews from "@/components/products/ProductPageReviews"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { PrismaClient } from "@prisma/client"

export default async function page({ params: { id } }) {

    const prisma = new PrismaClient()

    const product = await prisma.products.findFirst({
        where: {
            id: parseInt(id)
        },
        include: {
            reviews: true
        }
    })
    // SELECT * as p FROM `products` WHERE id=`id` JOIN `reviews` as r ON `p.id` = `r.productId`
    return (
        <div className="container mx-auto px-3">
            <ProductPage
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
                rating={product.rating}
            />

            <ProductPageReviews reviews={product.reviews} />

            <ProductReviewForm productId={product.id} />
        </div>
    )
}
