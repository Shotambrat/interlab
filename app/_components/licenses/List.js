"use client"
import licenceImage from "@/public/images/license.png";
import Image from "next/image";
import { useState } from "react";
import LicenseModal from "../Modals/LicenseModal";


export default function List() {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState([]);

  const data = [
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
    {
      imageUrl: licenceImage,
      description: [
        {
          type: "header",
          description: "Лицензия на осуществление медицинской деятельности",
        },
        {
          type: "paragraph",
          description:
            "Lorem ipsum dolor sit amet consectetur. Montes risus ultrices lacus euismod. Sed eu adipiscing dignissim eget mi commodo feugiat fringilla. Dolor semper pretium tortor senectus malesuada eget auctor massa blandit. Nunc egestas pellentesque ligula sit ultrices gravida. Duis volutpat cursus sapien urna dignissim nec. Morbi mattis elementum eu nec quisque ultricies mi donec. Nulla nunc ipsum suspendisse amet. Vitae est tristique euismod scelerisque non. Purus risus in bibendum cursus ultricies. Posuere porttitor elit orci gravida. Enim proin phasellus sed tristique amet sed mus. Orci vitae risus scelerisque et",
        },
        {
          type: "paragraph",
          description:
            "Cursus condimentum imperdiet mauris magna dolor. Aenean et velit in sed urna pretium non ac. Nulla odio consectetur morbi enim enim quis molestie. Neque pulvinar tincidunt urna in mauris sed congue quam cras. Pulvinar at blandit mattis velit. Suspendisse tempor ac praesent sed consequat in dolor viverra et. Est ut lectus non et in ipsum a faucibus facilisis. Maecenas feugiat id facilisi feugiat vitae fames diam nunc. Quam at aenean dignissim amet",
        },
        {
          type: "paragraph",
          description:
            "Nisl volutpat nullam sit cum in amet non pharetra elementum. Quam rhoncus sed fermentum faucibus consectetur pellentesque in enim. Maecenas velit lorem malesuada scelerisque egestas aliquet nibh.",
        },
      ],
    },
  ];

  const handleOpenModal = (i) => {
    setModal(true);
    setModalData(i);
  };
  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 mdx:grid-cols-2 lg:grid-cols-4 gap-5 px-2">
      { modal ? <LicenseModal d={modalData} close={() => setModal(false)} /> : null}
      {data.map((d, i) => {
        return (
          <div key={i} className="relative border-4 border-neutral-300">
            <Image
              src={d.imageUrl}
              width={500}
              height={500}
              alt={`Licence Image ${i}`}
            />
            <button onClick={() => handleOpenModal(d)} className="absolute h-full w-full inset-0 hover:bg-slate-500 transition-all duration-300 hover:bg-opacity-50">
            </button>
          </div>
        );
      })}
    </div>
  );
}
