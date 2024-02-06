import TestForm from "@/components/TestForm";

export default function CheckoutPage({
    searchParams,
}) {
    console.log(searchParams.title);
    return (
        <div>

            <h2 className="text-center">Оформление заказа</h2>

            <p>Наименование товара: {searchParams.title}</p>
            <p>Количество: {searchParams.count}</p>
            <p>Цвет: {searchParams.color}</p>
            <p>Цена за штуку: {searchParams.price}</p>
            <p>Итоговая цена: {searchParams.price * searchParams.count}</p>

            <TestForm />

        </div>
    )
}
