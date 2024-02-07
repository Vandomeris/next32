'use client'

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


export default function CreateProduct() {
    async function handleSubmit(e) {
        e.preventDefault()

        const resp = await fetch('/api/products/create', {
            method: 'PUT',
            body: new FormData(e.target)
        })
    }


    return (
        <form
            onSubmit={handleSubmit}
            className="w-1/2 mx-auto p-5 border flex flex-col gap-y-5">
            <Input name="name" type="text" placeholder="Введите название продукта" />
            <Textarea name="description" placeholder="Введите описание товара" />
            <Input name="price" type="number" placeholder="Введите цену" />
            <Input name="rating" type="text" placeholder="Введите начальный рейтинг товара" />
            <Input name="image" type="file" />
            <Button>Создать товар</Button>
        </form>
    )
}
