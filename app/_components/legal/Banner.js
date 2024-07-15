import Image from "next/image";
import legalImage from "@/public/images/legal-image.png";

export default function Banner() {
  return (
    <div className="w-full bg-slate-100 relative items-center px-2">
      <div className="w-full max-w-[1440px] mx-auto flex max-lg:flex-col relative">
        <div className="flex flex-col gap-5 py-12 lg:py-20">
                <h1 className="text-red-400 text-4xl font-bold w-full max-w-[600px]">
                    Решения для юридических лиц: 
                    <span className="text-black"> партнерские программы и корпоративное обслуживание</span>
                </h1>
                <p className="w-full max-w-[600px]">
                Мы предлагаем комплексные решения для корпоративного обслуживания и партнёрства с другими медицинскими учреждениями. Наши услуги направлены на обеспечение здоровья ваших сотрудников и партнёров на высшем уровне.
                </p>
        </div>
        <Image
          src={legalImage}
          width={1000}
          height={1000}
          alt="Legal Image Banner"
          className="h-full w-auto absolute bottom-0 max-lg:relative right-0"
        />
      </div>
    </div>
  );
}
