import cost from "@/public/images/autsorsing/cost.png"
import Image from "next/image"

export default function PriceCut() {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-red-50 rounded-2xl flex flex-col gap-4 items-center py-8'>
        <Image
        src={cost}
        height={500}
        width={500}
        alt="Cost Logo"
        className="h-[150px] w-auto"
        />
        <h3 className="text-3xl font-semibold w-full max-w-[350px] text-center">
            Цены и тарифы доступны по запросу
        </h3>
        <p className="w-full max-w-[350px] text-center">
            Свяжитесь с нами, чтобы обсудить детали и начать плодотворенное сотрудничество
        </p>
        <button className="py-3 rounded-full px-16 text-white font-semibold bg-rose-400">
            Связаться
        </button>
    </div>
  )
}
