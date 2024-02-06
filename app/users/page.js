
import UsersFilter from "@/components/UsersFilter"
import { PrismaClient } from "@prisma/client"
import Link from "next/link"


async function getUsers() {
    const client = new PrismaClient()
    const data = await client.users.findMany({
        select: {
            id: true,
            name: true,
            age: true
        }
    })
    return data
}


export default async function UsersPage() {
    const users = await getUsers()
    return (
        <UsersFilter users={users} />
    )
}