import React from "react";
import ServiceItem from "@/app/_components/services/ServiceItem";
import Link from "next/link";
import ButtonLinkBorder from "@/app/_components/buttons/ButtonLinkBorder";

export default function Interest() {
      const data = [
        {
          title: "ИХЛА",
          description: "Медецинские анализы",
          url: "/ihla",
        },
        {
          title: "ПЦР",
          description: "Медецинские анализы",
          url: "/psr",
        },
        {
          title: "Гематология",
          description: "Медецинские анализы",
          url: "/gematologiya",
        },
      ]
  return (
    <div className="w-full px-2">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-5">
        <h2 className="text-4xl font-bold">Так же вас может интересовать</h2>
        <div className="w-full grid max-mdx:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-3">
          {data.map((item, index) => {
            return (<ServiceItem
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
            />);
          })}
        </div>
        <div className="flex w-full justify-center">
        <Link href="/service">
        <ButtonLinkBorder title={'Все услуги'} />
        </Link>

        </div>
      </div>
    </div>
  );
}
