import Link from "next/link";
import Dropdown from "./Dropdown";

export default function Header() {
    return (
        <header className="flex container mx-auto justify-between items-center py-5 mb-12 bg-[#ce41f1]">
            <div className=" w-52">
                <img className="w-full" src="/img/logo.svg" alt="" />
            </div>
            <nav className="flex gap-x-8">
                <Link className=" text-2xl hover:text-orange-400 transition-all" href="/">Главная</Link>

                <Link className=" text-2xl hover:text-orange-400 transition-all" href="/users">Пользователи</Link>

                <Dropdown title="Магазин">
                    <ul>
                        <li>
                            <Link className=" text-2xl hover:text-orange-400 transition-all" href="/goods">Товары</Link>
                        </li>
                        <li>
                            <Link className=" text-2xl hover:text-orange-400 transition-all" href="/products">Продукты</Link>
                        </li>
                    </ul>
                </Dropdown>
            </nav>
        </header>
    )
}
