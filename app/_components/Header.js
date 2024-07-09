// app/_components/Header.js
"use client";
import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import Tools from "@/app/_components/Tools";
import { useEffect, useState } from "react";
import axios from "axios";

function Header() {

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
    <header className="flex justify-center items-center px-2 lg:px-16 py-3 bg-white max-md:px-5 z-10 relative">
      <div className="flex gap-1 justify-between items-center w-full max-w-[1440px]">
        <Logo />
        <Navigation navOptions={navOptions} />
        <Tools navOptions={navOptions} />
      </div>
    </header>
  );
}

export default Header;