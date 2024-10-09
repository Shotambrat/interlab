"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import LicenseModal from "../Modals/LicenseModal";

export default function List({ locale }) {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [licenses, setLicenses] = useState(null);

  useEffect(() => {
    const fetchLicenses = async () => {
      try {
        const data = await client.fetch(`
          *[_type == 'license' && isActive == true]{
            title,
            description,
            photo{
              asset->{
                url
              }
            }
          }
        `);
        setLicenses(data);
      } catch (error) {
        console.error("Ошибка при загрузке лицензий:", error);
      }
    };
    fetchLicenses();
  }, []);

  const handleOpenModal = (license) => {
    setModal(true);
    setModalData(license);
  };

  if (!licenses) return <p>Загрузка...</p>;

  return (
    <div className="w-full max-w-[1440px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
      {modal && <LicenseModal data={modalData} close={() => setModal(false)} />}
      {licenses.map((license, i) => (
        <div key={i} className="relative border-4 border-neutral-300">
          <Image
            src={license.photo?.asset?.url || "/placeholder.jpg"}
            width={500}
            height={500}
            alt={`License Image ${i}`}
            className="w-full h-auto object-cover"
          />
          <button
            onClick={() => handleOpenModal(license)}
            className="absolute inset-0 hover:bg-slate-500 transition-all duration-300 hover:bg-opacity-50"
          ></button>
        </div>
      ))}
    </div>
  );
}
