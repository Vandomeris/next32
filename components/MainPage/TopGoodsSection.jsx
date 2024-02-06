import getGoods from '@/lib/getGoods'
import Card from '@/components/Card'
import Dropdown from '../Dropdown'


export default async function TopGoodsSection() {
    const topGoods = await getGoods(3)
    return (
        <section className='container mx-auto mt-16'>
            <h2 className='text-center font-bold text-3xl mb-10'>Лучшие товары недели</h2>
            <div className='flex justify-between'>
                {
                    topGoods.map((good) => (
                        <Card
                            key={good.title}
                            title={good.title}
                            price={good.price}
                            rating={good.rating}
                            description={good.description}
                        />
                    )
                    )
                }
            </div>
        </section>
    )
}
