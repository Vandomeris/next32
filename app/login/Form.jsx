'use client'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Form() {
    const router = useRouter()
    async function handleSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        console.log(response);

        if (!response.error) {
            router.push('/')
            router.refresh()
        }
    }

    return (

        <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto border p-5 gap-y-5 ">

            <input name='email' className="border border-orange-400 py-2 px-4" type="email" placeholder="Введите email" />
            <input name='password' className="border border-orange-400 py-2 px-4" type="password" placeholder="Введите пароль" />
            <button className="w-fit mx-auto border border-orange-400 py-2 px-4 hover:bg-orange-400 hover:text-white transition-all">Войти</button>
        </form>

    )
}
