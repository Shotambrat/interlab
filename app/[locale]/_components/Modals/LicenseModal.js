import Image from "next/image";
import { useRef } from "react";
import useClickOutside from "@/hooks/useClickOutside";

export default function LicenseModal({ data, close }) {
  const modalRef = useRef(null)

  useClickOutside(modalRef, close)

  return (
    <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center px-2 overflow-y-scroll">
      <div ref={modalRef} className="w-full max-w-[1000px] rounded-3xl bg-white px-8 py-8 flex flex-col lg:flex-row gap-4 relative">
        <div className="flex flex-col lg:flex-row gap-4 w-full overflow-y-auto max-h-[90vh] lg:max-h-[60vh]">
          <div className="lg:sticky top-0 flex-1">
            <Image
              src={data.photo?.asset?.url || "/placeholder.jpg"}
              width={500}
              height={500}
              alt="Image of Licence"
              className="h-full w-full lg:w-auto rounded-xl object-contain"
            />
          </div>
          <div className="flex flex-col gap-7 flex-1 overflow-y-auto p-4">
            <h2 className="text-2xl font-bold leading-7">
              {data.title?.ru || "Название лицензии"}
            </h2>
            <p className="text-lg leading-5">
              {data.description?.ru || "Описание лицензии"}
            </p>
          </div>
        </div>
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
        >
          X
        </button>
      </div>
    </div>
  );
}
