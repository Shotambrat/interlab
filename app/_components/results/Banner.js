

export default function Banner() {
  return (
    <div className='w-full bg-slate-100 py-16 px-2'>
        <div className='w-full max-w-[1440px] flex flex-col gap-8 mx-auto'>
            <h1 className='font-bold text-4xl max-slg:text-3xl max-mdx:text-2xl'>
                Получите результаты анализов онлайн, не посещая клинику
            </h1>
            <div className="text-sm flex gap-2 md:gap-5 font-semibold max-md:flex-wrap max-md:w-[70%]">
                <a href="/about/license" className='px-4 py-2 text-white bg-red-400 rounded-full max-md:w-full max-md:flex max-md:justify-center'>
                    Сертификаты качества
                </a>
                <button className='py-2 px-10 border border-red-400 text-red-400 rounded-full max-md:w-full max-md:flex max-md:justify-center'>
                    Связаться
                </button>
            </div>
        </div>
    </div>
  )
}
