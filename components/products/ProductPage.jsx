
export default function ProductPage({ name, image, description, price, rating }) {
    return (
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-4xl font-bold mb-8">{name}</h1>

                <div className="w-1/3 mb-8">
                    <img className="w-full" src={`/images/products/${image}`} alt="" />
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">Описание:</h3>
                    <p>
                        {description}
                    </p>
                </div>
            </div>



            <div>
                <p className="text-3xl mb-5">Цена: {price} рублей</p>
                <p className="text-2xl">Рейтинг - {rating}</p>
            </div>
        </div>
    )
}
