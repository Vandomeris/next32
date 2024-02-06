export default function HeroSection() {
    return (
        <section className='container mx-auto flex justify-between items-center'>

            <h1 className='w-[40%] font-bold text-6xl'>
                <p className='mb-10'>Лучшие товары</p>
                <p>Низкие цены</p>
            </h1>


            <div className='w-[40%]'>
                <img className='w-full' src='/img/hero-image.webp' alt='' />
            </div>

        </section>
    )
}
