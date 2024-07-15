
export default function ServiceItemBanner() {
  return (
    <div className="w-full bg-slate-100 py-12">
        <div className="w-full max-w-[1440px] flex flex-col px-2 gap-5 mx-auto">
            <h1 className="text-4xl max-mdx:text-2xl font-bold">Услуги кардиолога</h1>
            <p className="w-full max-w-[550px] leading-5 text-neutral-400">
                Если у вас: нарушение сердечного ритма, обильное потоотделение, головкружение, тошнота, проявление хронического кашля и т.д.
            </p>
            <div className="flex gap-3 max-md:flex-wrap">
                <button className="mdx:px-10 px-4 py-3 rounded-full bg-red-400 text-white font-semibold">
                    Онлайн запись
                </button>
                <button className="mdx:px-10 px-6 py-3 rounded-full border border-red-400 text-red-400 font-semibold">
                    Связаться
                </button>
            </div>
        </div>
    </div>
  )
}
