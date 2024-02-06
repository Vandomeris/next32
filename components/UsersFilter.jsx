'use client'

import AgeChoose from "@/components/AgeChoose"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"

export default function UsersFilter({ users }) {

    const [Users, setUsers] = useState(users)
    async function handleDelete(e) {

        const resp = await fetch(`/api/users/delete?id=${e.target.dataset.id}`)
        const res = await resp.json()

        const newUsers = Users.filter((el) => {
            return el.id != e.target.dataset.id
        })

        if (res.result === 'ok') {
            setUsers(newUsers)
        }

    }

    return (
        <div>
            <AgeChoose setUsers={setUsers} />
            <ul className="mt-5">
                {
                    Users.map((user) => (
                        <li key={user.id} className="mb-5 border p-5 flex items-center justify-between">
                            <Link href={`/users/${user.id}`}>
                                {user.name} | {user.age} лет
                            </Link>
                            <Button
                                data-id={user.id}
                                onClick={handleDelete}
                                className="py-1 px-3 text-2xl">
                                🗑
                            </Button>
                        </li>
                    ))
                }
            </ul >
        </div>
    )
}
