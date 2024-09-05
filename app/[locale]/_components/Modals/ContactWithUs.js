import Image from "next/image";
import redIcon from "@/public/svg/right-contact-red.svg";
import blueIcon from "@/public/svg/right-contact-blue.svg";
import indigoIcon from "@/public/svg/right-contact-cyan.svg";
import emberIcon from "@/public/svg/right-contact-ember.svg";
import redcallcontact from "@/public/svg/red-call-contact.svg";
import telegram from "@/public/svg/telegram.svg";
import list from "@/public/svg/list.svg";
import tgbot from "@/public/svg/tgbot.svg";
import closeicon from "@/public/svg/closeicon.svg";

export default function ContactWithUs({ setState }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 p-8 rounded-3xl shadow-lg max-mdx:w-[90%] w-[450px]">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-semibold">Связаться с нами</h1>
          <button
            onClick={() => {
              setState(false);
            }}
          >
            <Image
              priority
              className="w-4 h-4"
              src={closeicon}
              width={100}
              height={100}
              alt="The Wild Oasis logo"
              quality={100}
            />
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <a href="tel:+9998998989" className="px-4 border border-rose-500 bg-rose-100 py-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-4 ml-2">
                <Image
                  priority
                  className="w-4 h-4"
                  src={redcallcontact}
                  width={100}
                  height={100}
                  alt="The Wild Oasis logo"
                  quality={100}
                />
              </div>
              <p className="text-rose-500 font-semibold text-lg">Позвонить</p>
            </div>
            <div>
              <Image
                priority
                className="w-4 h-4"
                src={redIcon}
                width={100}
                height={100}
                alt="The Wild Oasis logo"
                quality={100}
              />
            </div>
          </a>
          <a href="https://telegraph.com" className="px-4 border border-blue-500 bg-blue-100 py-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  priority
                  className="w-6 h-6"
                  src={telegram}
                  width={100}
                  height={100}
                  alt="The Wild Oasis logo"
                  quality={100}
                />
              </div>
              <p className="text-blue-500 font-semibold text-lg">
                Написать в Telegram
              </p>
            </div>
            <div>
              <Image
                priority
                className="w-4 h-4"
                src={blueIcon}
                width={100}
                height={100}
                alt="The Wild Oasis logo"
                quality={100}
              />
            </div>
          </a>
          <button className="px-4 border border-indigo-500 bg-indigo-100 py-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  priority
                  className="w-6 h-6"
                  src={list}
                  width={100}
                  height={100}
                  alt="The Wild Oasis logo"
                  quality={100}
                />
              </div>
              <p className="text-indigo-500 font-semibold text-lg">
                Оставить заявку
              </p>
            </div>
            <div>
              <Image
                priority
                className="w-4 h-4"
                src={indigoIcon}
                width={100}
                height={100}
                alt="The Wild Oasis logo"
                quality={100}
              />
            </div>
          </button>
          <button className="px-4 border border-emerald-500 bg-emerald-100 py-4 rounded-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  priority
                  className="w-6 h-6"
                  src={tgbot}
                  width={100}
                  height={100}
                  alt="The Wild Oasis logo"
                  quality={100}
                />
              </div>
              <p className="text-emerald-500 font-semibold text-lg">TG-бот</p>
            </div>
            <div>
              <Image
                priority
                className="w-4 h-4"
                src={emberIcon}
                width={100}
                height={100}
                alt="The Wild Oasis logo"
                quality={100}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
