'use client'

import { useState } from "react"

export default function Dropdown({ title, children }) {

    const [show, setShow] = useState(false)

    return (
        <div
            className=" relative text-2xl transition-all cursor-pointer"
            onClick={() => {
                setShow(!show)
            }}

        >
            <p className="flex gap-x-3 items-center">{title} <span className="text-sm">▼</span></p>
            {
                show && (
                    <div className="absolute left-0 top-full">
                        {children}
                    </div>
                )
            }

        </div>
    )
}
