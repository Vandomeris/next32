import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PrismaClient } from "@prisma/client"
import Link from "next/link";


export default async function ProductsPage() {

  const prisma = new PrismaClient()

  const products = await prisma.products.findMany()
  console.log(products);
  return (
    <div className="flex">

      {
        products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} className="w-1/3 mx-4">
            <Card >
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">{product.name}</CardTitle>
                <CardDescription className="text-2xl">{product.price} $</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <img src={`/images/products/${product.image}`} alt="" />
                </div>
                <p className="mt-5">{product.description}</p>
              </CardContent>
              <CardFooter>

              </CardFooter>
            </Card>
          </Link>
        ))
      }

    </div>
  )
}
