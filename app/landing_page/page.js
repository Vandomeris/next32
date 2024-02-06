async function getRegistered() {
    const resp = await fetch('http://localhost:1111/users', {
        next: {
            revalidate: 20
        }
    })
    return resp.json()
}



export default async function page() {
    const registered = await getRegistered()
    return (
        <div>
            <h1>
                Добро пожаловать на  сайт нашей фирмы!
            </h1>
            if(1=1)
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>

            <p>Нас уже: {registered.count}</p>
        </div>
    )
}
