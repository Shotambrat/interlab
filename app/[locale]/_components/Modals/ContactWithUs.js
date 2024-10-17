'use client'
import { useRef, useState } from "react";
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
import OnlineReq from "@/app/[locale]/_components/Modals/OnlineReq";
import useClickOutside from "@/hooks/useClickOutside";

const ContactButton = ({
  href,
  onClick,
  icon,
  bgColor,
  borderColor,
  textColor,
  text,
  rightIcon,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-4 border ${borderColor} ${bgColor} cursor-pointer py-4 rounded-lg flex justify-between items-center`}
  >
    <div className="flex items-center font-bold">
      <div className="mr-4">
        <Image
          priority
          className="w-6 h-6"
          src={icon}
          width={100}
          height={100}
          alt={text}
        />
      </div>
      {/* <p className={`${textColor} font-semibold text-lg`}>{text}</p> */}
      {text}
    </div>
    <div>
      <Image
        priority
        className="w-4 h-4"
        src={rightIcon}
        width={100}
        height={100}
        alt={text}
      />
    </div>
  </a>
);

export default function ContactWithUs({ setState }) {
  const [onlineReq, setOnlineReq] = useState(false);
  const modalRef = useRef(null)

  useClickOutside(modalRef, () => setState(false))

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      {onlineReq ? <OnlineReq setState={setOnlineReq} /> : <></>}
      <div ref={modalRef} className="bg-white max-md:p-4 p-8 rounded-3xl shadow-lg max-mdx:w-[90%] w-[450px]">
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
              alt="Закрыть"
              quality={100}
            />
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-4">
          <ContactButton
            onClick={async () => {
              try {
                let response = await fetch(
                  "https://interlab.mrjtrade.uz/api/count?button=call",
                  {
                    method: "POST",
                  }
                );
                console.log("Response Of CALLL Count ", response.json());
              } catch (error) {
                console.log("error to counter fetching", error);
              }
            }}
            href="tel:1156"
            icon={redcallcontact}
            bgColor="bg-rose-100"
            borderColor="border-rose-500"
            textColor="text-rose-500"
            text="Позвонить"
            rightIcon={redIcon}
          />
          <ContactButton
            href="https://t.me/interlabreception"
            icon={telegram}
            bgColor="bg-blue-100"
            borderColor="border-blue-500"
            textColor="text-blue-500"
            text="Написать в Telegram"
            rightIcon={blueIcon}
          />
          <ContactButton
            onClick={() =>  setOnlineReq(true)}
            icon={list}
            bgColor="bg-indigo-100"
            borderColor="border-indigo-500"
            textColor="text-indigo-500"
            text="Оставить заявку"
            rightIcon={indigoIcon}
          />
          <ContactButton
          href={'https://t.me/Intermeduz_bot'}
            onClick={() => alert("TG-бот")}
            icon={tgbot}
            bgColor="bg-emerald-100"
            borderColor="border-emerald-500"
            textColor="text-emerald-500"
            text="TG-бот"
            rightIcon={emberIcon}
          />
        </div>
      </div>
    </div>
  );
}
