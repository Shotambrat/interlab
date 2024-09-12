import Image from "next/image"
import arrowwhite from "@/public/svg/arrow-right-down-wht.svg";

export default function LinkYakor({slug}) {
  return (
    <div
    style={{
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      width: "3rem",
      height: "3rem",
    }}
    className="absolute cursor-pointer hover flex items-center justify-center rounded-full right-3 bottom-3 backdrop-blur-sm border border-white"
  >
    <Image
      src={arrowwhite}
      width={100}
      height={100}
      alt="Arrow Icon down right"
      className="w-8 h-8"
    />
  </div>
  )
}
