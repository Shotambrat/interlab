import Image from "next/image";
import React from "react";

export default function Social() {
  const data = [
    {
      id: 1,
      title: "Kun.uz",
      link: "/",
      image: "/images/ckdl/kunuz.png",
    },
    {
      id: 2,
      title: "Gazeta.uz",
      link: "/",
      image: "/images/ckdl/gazeta.png",
    },
    {
      id: 3,
      title: "UZ News",
      link: "/",
      image: "/images/ckdl/uznews.png",
    },
    {
      id: 4,
      title: "Repost.uz",
      link: "/",
      image: "/images/ckdl/repost.png",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-8 pt-24">
      <h3 className="text-4xl font-semibold">О нас пишут в СМИ</h3>
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <a key={item.id} href={item.link} className="flex flex-col gap-4">
            <div className="w-full">
              <Image
                src={item.image}
                width={500}
                height={500}
                alt={`Social Image ${item.id}`}
                className="w-full rounded-3xl"
              />
            </div>
            <h4 className="text-xl font-semibold">{item.title}</h4>
          </a>
        ))}
      </div>
    </div>
  );
}
