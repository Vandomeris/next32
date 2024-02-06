'use client'

import { useState } from "react"
import { Input } from "../ui/input"



export default function UserDataForm({ data, setData }) {



    function handleChange(e) {

        const inputName = e.target.name
        const inputValue = e.target.value

        setData({
            ...data,
            [inputName]: inputValue
        })

    }

    return (
        <form>
            <div className="mb-5"> <Input onChange={handleChange} name="name" value={data.name} placeholder="Ваше имя" /> </div>
            <div className="mb-5"> <Input onChange={handleChange} name="email" value={data.email} placeholder="Ваш Email" /> </div>
            <div className="mb-5"> <Input onChange={handleChange} name="userName" value={data.userName} placeholder="Ваш ник" /> </div>
            <div className="mb-5"> <Input onChange={handleChange} name="age" value={data.age} placeholder="Ваш возраст" /> </div>
            <div className="mb-5"> <Input onChange={handleChange} name="phone" value={data.phone} placeholder="Ваш телефон" /> </div>
        </form>
    )
}
