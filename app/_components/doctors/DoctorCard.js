import Image from "next/image";
import LinkYakor from "@/app/_components/LinkYakor";

const DoctorCardMain = ({ key, name, specialty, imageSrc, slug }) => (
  <article key={key} className="flex flex-col w-full max-w-[320px] grow pb-2 max-md:mt-5">
    <div className="flex justify-between h-full flex-col pb-5 bg-white shadow-lg md:shadow-2xl rounded-[30px]">
      <div>

      <div className=" flex overflow-hidden relative flex-col rounded-3xl items-end px-16 pt-20 pb-3 w-full aspect-[0.84] max-md:pl-5">
        <Image
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={`Portrait of ${name}`}
          priority
          width={300}
          height={300}
          quality={100}
        />
      <LinkYakor slug={`/doctors/${slug}`} />
      </div>
      <div className="flex flex-col mx-5 mt-5 max-md:mx-2.5">
        <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
        <p className="mt-1 text-base text-zinc-500">{specialty}</p>
      </div>
      </div>
      <button className="w-[80%] mx-auto py-3 rounded-full text-center text-rose-400 hover:text-rose-500 hover:bg-rose-200 transition-all duration-200 border border-neutral-200 mt-4 text-lg font-semibold">
        Записаться
      </button>
    </div>
  </article>
);

export default DoctorCardMain;
