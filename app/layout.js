import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700']
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">

      <body className={montserrat.className}>
        <Header />

        <main>
          {children}
        </main>


      </body>
    </html>
  )
}