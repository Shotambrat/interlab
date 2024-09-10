import Image from "next/image";
import React from "react";

export default function WhyIntermedItem({
  index,
  title,
  description,
  photoSrc,
}) {
  return (
    <div
      key={index}
      className="p-4 rounded-2xl bg-red-200 relative flex flex-col gap-4 pb-12"
    >
      <h3 className="text-xl font-semibold text-red-400">{title}</h3>
      <p>{description}</p>
      <Image
        src={photoSrc}
        width={300}
        height={300}
        quality={100}
        alt={`${title} Icon`}
        className="absolute -right-4 -bottom-4"
      />
    </div>
  );
}
