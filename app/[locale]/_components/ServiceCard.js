import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({
  locale,
  title,
  description,
  imageSrc,
  bgColor,
  slug,
}) {
  return (
    <Link
      href={`${locale}/services/${slug}`}
      style={{
        backgroundColor: bgColor,
      }}
      className={`flex flex-col h-[300px] overflow-hidden grow rounded-[30px] max-w-full relative transition-all duration-300 cursor-pointer`}
    >
      <div className="rounded-[30px] pl-4 w-[76%]">
        <div className="flex gap-2 max-md:flex-col ">
          <div className="flex flex-col w-[60%] max-md:ml-0 max-md:w-[80%]">
            <div className="flex flex-col mt-4 max-md:max-w-full">
              <h3 className="text-2xl font-bold leading-8 uppercase text-neutral-900 max-md:max-w-full">
                {title}
              </h3>
              <p className="mt-2 leading-4 text-sm text-zinc-500 max-md:max-w-full">
                {description}
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 ml-5 w-2/3 md:w-[40%] max-md:ml-0">
            <Image
              src={imageSrc}
              width={100}
              height={100}
              className="grow mt-11 w-full aspect-[1.27] max-md:mt-10"
              alt={title}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}