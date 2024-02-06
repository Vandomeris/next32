'use client'

import { useState } from "react"
import UserDataForm from "./UserDataForm"

export default function UserData({ id, name, email, userName, age, phone }) {

    const [isEditing, setIsEditing] = useState(false)

    const [data, setData] = useState({
        id: id,
        name: name,
        email: email,
        userName: userName,
        age: age,
        phone: phone
    })


    async function handleClick() {

        if (isEditing === true) {


            const response = await fetch('/api/users/data', {
                method: 'POST',
                body: JSON.stringify(data)
            })


        }

        setIsEditing((prev) => !prev)

    }

    return (
        <div className="flex justify-center">
            {
                !isEditing && (
                    <div className="w-1/2">

                        <p>Имя: {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Ник: {data.userName}</p>
                        <p>Возраст: {data.age}</p>
                        <p>Телефон: {data.phone}</p>

                    </div>
                )
            }

            <div>
                <button
                    onClick={handleClick}
                    className="text-4xl">
                    {isEditing ? '✓' : '✎'}
                </button>
            </div>

            {
                isEditing && (
                    <UserDataForm
                        data={data}
                        setData={setData}
                    />
                )
            }


        </div>
    )
}
