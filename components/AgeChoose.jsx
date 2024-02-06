'use client'

import { useEffect, useState } from "react"

export default function AgeChoose({ setUsers }) {

    const [age, setAge] = useState('')


    function handleClick(e) {
        const ageType = e.target.dataset.age
        setAge(ageType)
    }

    async function fetchData() {

        if (age) {


            const resp = await fetch('/api/users/filter/age', {
                method: 'POST',
                body: JSON.stringify({
                    ageType: age
                })
            })

            const result = await resp.json()
            setUsers(result)
            console.log(result);

        }

    }

    useEffect(() => {
        fetchData()
    }, [age])

    return (
        <div>

            <button className="border border-orange-400 py-2 px-4 mx-1" data-age="young" onClick={handleClick}>Молодые</button>
            <button className="border border-orange-400 py-2 px-4 mx-1" data-age="middle" onClick={handleClick}>Среднего возраста</button>
            <button className="border border-orange-400 py-2 px-4 mx-1" data-age="old" onClick={handleClick}>Пожилые</button>

        </div>
    )
}
