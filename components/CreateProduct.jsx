'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"


export default function CreateProduct() {

    const [files, setFiles] = useState([])

    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        // for (let i = 0; i < files.length; i++) {
        //     formData.append('image', files[i])
        //     console.log(files[i]);
        // }

        // console.log(Object.fromEntries(formData));

        const resp = await fetch('/api/products/create', {
            method: 'PUT',
            body: formData
        })
    }


    return (
        <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="w-1/2 mx-auto p-5 border flex flex-col gap-y-5">
            <Input name="name" type="text" placeholder="Введите название продукта" />
            <Textarea name="description" placeholder="Введите описание товара" />
            <Input name="price" type="number" placeholder="Введите цену" />
            <Input name="rating" type="text" placeholder="Введите начальный рейтинг товара" />
            <Input onChange={(e) => {
                // setFiles(e.target.files)
                // console.log(e.target.files);
            }} name="image" type="file" />
            <Button>Создать товар</Button>
        </form>
    )
}
