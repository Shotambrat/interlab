"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Navigation() {
  const [navOptions, setNavOptions] = useState([]);

  useEffect(() => {
    // Функция для получения данных из API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://213.230.91.55:8100/navbar/get-all', {
          headers: {
            'Accept-Language': 'ru'
          }
        }); // Замените 'URL_TO_YOUR_API' на фактический URL вашего API
        const data = response.data;
        if (data.data[0].active) {
          setNavOptions(data.data[0].navbarOptions);
        }
      } catch (error) {
        console.error("Error fetching navigation data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav className="z-10 text-xl hidden lg:flex">
      <ul className="flex gap-5 justify-between self-stretch my-auto text-lg text-neutral-900 max-md:flex-wrap max-md:max-w-full">
        {navOptions.map((option) => (
          <Link href={option.url} className="flex items-center gap-4 z-10" key={option.id}>
            <li className="cursor-pointer">{option.name}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}

