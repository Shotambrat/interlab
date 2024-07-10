// import Image from "next/image";
// import lineForm from "@/public/svg/illustration.svg";

export default function Application() {
  return (
    <div className="relative overflow-hidden py-5 lg:py-10 px-4 lg:px-10 bg-rose-50 rounded-[30px] mdx:rounded-[50px] max-md:max-w-full">
      <div className="relative z-10 flex lg:justify-around gap-5 max-slg:flex-col max-md:gap-0">
        <div className="flex flex-col w-[50%] lg:w-[50%] xl:w-[30%] max-md:ml-0 max-slg:w-full">
          <div className="flex flex-col grow text-2xl mdx:text-4xl font-bold text-red-400 max-slg:max-w-full">
            <h2 className="justify-center self-end max-w-full w-[814px] max-md:max-w-full">
              Оставьте заявку и мы перезвоним вам в ближайшее время
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-[32%] max-md:ml-0 max-slg:w-full">
          <form className="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col text-red-400 max-md:max-w-full">
              <label htmlFor="fullName" className="sr-only">
                ФИО
              </label>
              <input
                id="fullName"
                type="text"
                className="justify-center items-start px-4 py-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                placeholder="ФИО *"
                required
              />
              <label htmlFor="phoneNumber" className="sr-only">
                Номер телефона
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                placeholder="Номер телефона *"
                required
              />
              <div className="flex gap-5 justify-center py-4 pr-20 pl-5 mt-4 bg-white rounded-xl text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <select
                  id="service"
                  className="appearance-none bg-transparent border-none"
                >
                  <option value="">Интересующая услуга</option>
                </select>
              </div>
              <label htmlFor="comment" className="sr-only">
                Ваш комментарий
              </label>
              <textarea
                id="comment"
                className="justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
                placeholder="Ваш комментарий"
              ></textarea>
            </div>
            <button
              type="submit"
              className="justify-center px-10 py-4 mt-6 font-bold text-center text-white bg-red-400 rounded-[100px] max-md:px-5 mdx:w-[300px] lg:w-[250px] max-w-full"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
      {/* <Image
        src={lineForm}
        alt="Line of Form"
        priority
        width={100}
        height={100}
        quality={100}
        style={{ zIndex: 1 }}
      /> */}
      <div className="absolute w-full left-0 bottom-36 size-1/4 lg:size-auto lg:-bottom-8 object-cover ">
        <svg
          width="387"
          height="129"
          viewBox="0 0 387 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 76.8248C44.0625 59.3562 135.541 37.7718 164.955 91.1825C201.721 157.946 288.419 7.54897 353.328 5.03637C405.256 3.02629 374.965 84.8413 353.328 126"
            stroke="#FB6A68"
            stroke-width="10"
          />
        </svg>
      </div>
    </div>
  );
}
