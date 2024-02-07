'use client'

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ProductReviewForm({ productId }) {

    async function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(e.target)
        formData.append('productId', productId)

        const resp = await fetch('/api/products/review', {
            method: 'PUT',
            body: formData
        })
    }

    return (
        <div>

            <form onSubmit={handleSubmit}>

                <Textarea name="text" placeholder="Напишите отзыв" />

                <div className="flex gap-x-5 mx-auto mt-5">
                    <div className="w-fit">
                        <div>1</div>
                        <Input name="mark" value="1" type="radio" />
                    </div>
                    <div className="w-fit">
                        <div>2</div>
                        <Input name="mark" value="2" type="radio" />
                    </div>
                    <div className="w-fit">
                        <div>3</div>
                        <Input name="mark" value="3" type="radio" />
                    </div>
                    <div className="w-fit">
                        <div>4</div>
                        <Input name="mark" value="4" type="radio" />
                    </div>
                    <div className="w-fit">
                        <div>5</div>
                        <Input name="mark" value="5" type="radio" />
                    </div>
                </div>


                <Button className="mt-5">Отправить отзыв</Button>

            </form>

        </div>
    )
}
