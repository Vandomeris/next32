import Card from "@/components/Card"
import getGoods from "@/lib/getGoods"



export default async function goodsPage() {
    const goods = await getGoods()
    return (
        <div className="flex flex-wrap gap-5 justify-between">
            {
                goods.map((good) => (
                    <Card
                        key={good.title}
                        title={good.title}
                        price={good.price}
                        rating={good.rating}
                        description={good.description}
                    />
                ))
            }
        </div>
    )
}
