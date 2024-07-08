import Image from "next/image";

const DoctorCardMain = ({ name, specialty, imageSrc }) => (
    <article className="flex flex-col grow pb-2 max-md:mt-5">
      <div className="flex h-full flex-col pb-5 bg-white shadow-lg md:shadow-2xl rounded-[30px]">
        <div className="flex overflow-hidden relative flex-col rounded-3xl items-end px-16 pt-20 pb-3 w-full aspect-[0.84] max-md:pl-5">
          <Image
            src={imageSrc}
            className="object-cover absolute inset-0 size-full"
            alt={`Portrait of ${name}`}
            priority
            width={300}
            height={300}
            quality={100}
          />
        </div>
        <div className="flex flex-col mx-5 mt-5 max-md:mx-2.5">
          <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
          <p className="mt-1 text-base text-zinc-500">{specialty}</p>
        </div>
      </div>
    </article>
  );

  export default DoctorCardMain;