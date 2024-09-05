import Image from "next/image";
import Cost from "@/public/images/autsorsing/cost.png";

export default function BlockСontact() {
    return (
        <div className="bg-[#FFEFEF] px-[15px] mt-[100px] md:mt-[120px] lg:mt-[150px] w-full mx-auto flex flex-col text-center rounded-[20px]">
            <div className="flex justify-center items-center flex-col py-[30px] px-[15px] md:px-[30px]">
                <div className="flex justify-center">
                    <Image
                        src={Cost}
                        width={1000}
                        height={1000}
                        alt="Cost"
                        className="h-auto w-full max-w-[210px] lg:max-w-[225px]"
                    />
                </div>
                <h3 className="max-w-[430px] mt-[30px] lh font-bold text-[24px] md:text-[30px] mdx:text-[35px]  lg:text-[40px]">Цены и тарифы доступны по запросу</h3>
                <p className=" max-w-[428px] mt-[20px] mb-[30px] text-[#5B5B5B] text-[14px] md:text-[18px] lg:text-[20px]">Свяжитесь с нами, чтобы обсудить детали и начать плодотворное сотрудничество</p>
                <button className="text-[#fff] bg-[#FB6A68] px-[75px] py-[13.5px] font-bold text-[14px] md:text-[16px] rounded-[100px] max-w-[223px] flex justify-center">
                    Связаться
                </button>
            </div>
        </div>
    );
}
