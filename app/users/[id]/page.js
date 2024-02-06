
import UserData from "@/components/UserData/UserData"

import { PrismaClient } from "@prisma/client"

async function getUserById(id) {
    const client = new PrismaClient()

    return client.users.findFirst({
        where: {
            id: parseInt(id)
        }
    })
}

export default async function UserPage({ params: { id } }) {
    const user = await getUserById(id)
    return (
        <div>

            <UserData
                id={id}
                name={user.name}
                email={user.email}
                userName={user.userName}
                age={user.age}
                phone={user.phone}
            />

        </div>
    )
}
