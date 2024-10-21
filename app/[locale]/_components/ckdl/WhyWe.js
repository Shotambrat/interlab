import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function WhyWe() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex gap-8">
      <div className="flex-1 ">
        <Image
          src={"/images/about-banner.png"}
          width={1000}
          height={1000}
          quality={100}
          alt="Banner of WhyUs Section"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
      <div className="flex-1 min-h-[500px] flex flex-col justify-between items-start">
        <div>
          <h2 className="text-4xl font-semibold">
            Современное <br /> оборудование
          </h2>
          <p className="w-full max-w-[500px] text-xl text-[#5B5B5B]">
            Современное оборудование — это ключ к точной диагностике и
            эффективному лечению. В нашей клинике используется передовое
            медицинское оборудование, которое позволяет проводить исследования
            быстро и безболезненно, а также гарантирует высокую точность
            результатов <br /> <br />
            Мы постоянно обновляем нашу технику, чтобы соответствовать мировым
            стандартам и предоставлять пациентам качественные услуги на уровне
            лучших клиник
          </p>
        </div>
        <div className="flex gap-8">
          <button className="h-20 w-20 flex items-center justify-center rounded-full border border-[#E4E4E4]">
            <Image
            src={'/svg/ckdl/left-arrow-blck.svg'}
            width={100}
            height={100}
            alt="LEFT ARROW"
            className="w-6"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
