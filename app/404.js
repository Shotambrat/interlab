import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/header-logo-interlab.png";
import notfound from "@/public/images/not-found.png";

function Custom404() {
  return (
    <main className="h-screen w-full bg-white">
      <div className="h-[70px] mx-auto flex justify-between w-full max-w-[1440px] items-center px-2">
        <div></div>
        <div className="h-full">
          <Image
            src={logo}
            height={500}
            width={500}
            alt="Logo Image"
            className="h-full w-auto"
          />
        </div>
        <a href="tel:1156" className="px-4 py-2 rounded-full text-red-500 bg-red-100 text-lg font-semibold">
          1156
        </a>
      </div>
      <div className="w-full max-w-[1440px] h-full flex justify-center items-center mx-auto px-2">
        <div className="flex flex-col mdx:gap-8 gap-5 items-center">
          <Image
            src={notfound}
            width={1000}
            height={1000}
            alt="Not Found Image"
            className="mdx:h-[300px] w-full mdx:w-auto"
          />
          <div className="text-center flex flex-col gap-3">
          <h2 className="mdx:text-4xl text-3xl font-bold text-red-400 ">
            Упс! Страница не найдена :(
          </h2>
          <p className="max-w-[480px] w-full mx-auto text-neutral-400">
            Ой, кажется, вы попали на страницу, которая временно не доступна. Но не переживайте, ваше здоровье все еще  на первом месте для нас.
          </p>

          </div>

          <Link href="/" >
              <button className="px-6 py-3 rounded-full bg-red-400 text-white font-semibold">
                Вернуться на главную
              </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Custom404;
