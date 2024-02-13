import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { getServerSession } from 'next-auth'
import { NextAuthConfig } from '@/configs/NextAuthConfig'
import Link from 'next/link'
import LogoutBtn from '@/components/LogoutBtn'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(NextAuthConfig)
  console.log('Текущая сессия', session);
  return (
    <html lang="ru">

      <body className={montserrat.className}>
        <Header />
        <div>

          {
            !!session && <LogoutBtn />
          }

          {
            !session && <Link href="/login">Войти на сайт</Link>
          }

        </div>

        <main>
          {children}
        </main>


      </body>
    </html>
  )
}
