import Image from "next/image";
import medicalReport from "@/public/images/instructions/medical-report.png";

export default function Banner() {
  return (
    <div className="bg-gray-50 w-full px-4 lg:px-0 mdl:py-10">
      <div className="max-w-[1440px] w-full mx-auto flex flex-col justify-between lg:h-[150px] mdl:flex-row overflow-hidden max-mdl:py-10">
        <div className="flex justify-center flex-col ">
          <h1 className="text-5xl font-bold">Анализы крови</h1>
          <p className="mt-3 text-neutral-600 font-medium leading-5 text-lg max-w-[700px]">
            Клиника Intermed не несет ответственности за корректность
            результатов анализов при несоблюдении данных правил.
          </p>
        </div>
      </div>
    </div>
  );
}
