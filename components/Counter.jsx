'use client'


export default function Counter({ count, setCount }) {


    return (
        <div>
            <button
                onClick={() => {
                    if (count > 0)
                        setCount(count - 1)
                }}
            >-</button>
            <span> {count} </span>
            <button
                className=""
                onClick={() => {
                    setCount(count + 1)
                }}
            >+</button>
        </div>
    )
}
