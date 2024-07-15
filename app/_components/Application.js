// import Image from "next/image"
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
                className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                placeholder="ФИО *"
                required
              />
              <label htmlFor="phoneNumber" className="sr-only">
                Номер телефона
              </label>
              <input
                id="phoneNumber"
                type="tel"
                className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl max-md:pr-5 max-md:max-w-full"
                placeholder="Номер телефона *"
                required
              />
              <div className="relative">
                <select
                  className="block text-neutral-400 mt-4 py-4 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none w-full bg-white px-4 pr-8 rounded-xl"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Интересующая услуга
                  </option>
                  <option value="mrt">МРТ</option>
                  <option value="uzi">УЗИ</option>
                  <option value="cardio">Кардиология</option>
                  {/* Add more options as needed */}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-7 w-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
              <label htmlFor="comment" className="sr-only">
                Ваш комментарий
              </label>
              <textarea
                id="comment"
                className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
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
      className="absolute w-full left-0 bottom-36 size-1/4 lg:size-auto lg:-bottom-8 object-cover "
      alt="Line of Form"
      priority
      width={100}
      height={100}
      quality={100}
      style={{ zIndex: 1 }}
    /> */}
    </div>
  );
}
