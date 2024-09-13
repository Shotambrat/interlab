import doctorsBanner from "@/public/images/doctors-manner.png";
import Image from "next/image";

export default function ServiceBanner() {
  return (
    <div className="relative bg-gray-50 pt-10 px-2">
      <div className="relative mx-auto w-full h-full xl:pb-[100px] pb-[40px] max-w-[1440px] flex max-mdx:flex-col justify-between items-center">
        <div className="flex flex-col gap-5 w-full xl:w-3/5">
          <h1 className="xl:text-5xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
          Присоединяйтесь к команде профессионалов <span className="text-red-400">Intermed</span>
          </h1>
          <p className="text-neutral-600 leading-4 xl:leading-5 text-center xl:text-left">
          Мы всегда рады новым талантливым специалистам, готовым присоединиться к нашей команде. В Intermed мы предлагаем уникальные возможности для карьерного роста, профессионального развития и работы в дружном коллективе.
          </p>
        </div>
        <div className="hidden xl:block xl:absolute xl:w-1/3 right-0 bottom-0">
          <Image
            priority
            className="h-full w-full"
            src={doctorsBanner}
            width={1000}
            height={1000}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </div>
      </div>
      <div className="w-full xl:absolute xl:hidden right-0 bottom-0 relative">
        <Image
          priority
          className="h-full w-full"
          src={doctorsBanner}
          width={1000}
          height={1000}
          alt="The Wild Oasis logo"
          quality={100}
        />
      </div>
    </div>
  );
}