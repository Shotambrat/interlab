import Image from "next/image"
import backet from '@/public/svg/backet.svg'

export default function PopularAnalyzeItem() {
  return (
    <div className='w-full lg:max-w-[400px] max-w-[320px] flex flex-col justify-between p-4 gap-24 border border-neutral-500 rounded-3xl'>
      <h3 className='font-bold text-xl'>
        Креатинин в крови
      </h3>
      <div className='w-full flex justify-between'>
        <p className='bg-rose-200 text-rose-400 font-bold py-1 rounded-full px-4'>
            35 000 сум
        </p>
        <div>
            <Image
                src={backet}
                width={100}
                height={100}
                alt="Backet Icon"
                className="w-8 h-8"
            />
        </div>
      </div>
    </div>
  )
}
