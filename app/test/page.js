'use client'

import { useEffect, useState } from "react"

export default function TestPage() {
    const [data, setData] = useState('')

    useEffect(() => {

        async function getData() {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            const result = await data.json()
            setData(result)
        }

        getData()

    }, [])


    return (
        <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
    )
}


// GET POST PUT PATCH DELETE