import Image from "next/image";
import closeicongray from "@/public/svg/closeicon-gray.svg";

export default function ContactWithUs({ setState }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:w-[320px] w-[450px] relative">
        <button
          className="absolute top-5 right-5"
          onClick={() => {
            setState(false);
          }}
        >
          <Image
            priority
            className="w-4 h-4"
            src={closeicongray}
            width={100}
            height={100}
            alt="The Wild Oasis logo"
            quality={100}
          />
        </button>
        <div className="flex items-center flex-col slg:gap-5">
          <div className="flex flex-col text-center gap-1 px-8 lg:px-12">
            <h3 className="text-rose-400 text-2xl font-semibold">
              Онлайн запись
            </h3>
            <p className="text-neutral-400 text-sm ">
              Оставьте заявку и вам перезвонят в течение 5 минут, для
              подтверждения записи
            </p>
          </div>
          <div className="flex flex-col max-md:ml-0 w-full">
            <form className="flex flex-col text-base max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col text-red-400 max-md:max-w-full">
                <label htmlFor="fullName" className="sr-only">
                  ФИО
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 bg-white border-neutral-400 border rounded-xl max-md:pr-5 max-md:max-w-full"
                  placeholder="ФИО *"
                  required
                />
                <label htmlFor="phoneNumber" className="sr-only">
                  Номер телефона
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center items-start px-4 py-4 mt-4 bg-white border-neutral-400 border rounded-xl max-md:pr-5 max-md:max-w-full"
                  placeholder="Номер телефона *"
                  required
                />
                <div className="relative">
                  <select
                    className="block text-neutral-400 focus:outline-none mt-4 py-4 focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none border-neutral-400 border w-full bg-white px-4 pr-8 rounded-xl"
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
                  className="focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none justify-center border-neutral-400 border items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
                  placeholder="Ваш комментарий"
                ></textarea>
              </div>
            </form>
          </div>
          <button
            type="submit"
            className="justify-center px-10 py-3 mt-6 font-bold text-center text-white bg-red-400 hover:bg-red-500 transition-all duration-200 rounded-[100px] max-md:px-5 mdx:w-[300px] lg:w-[250px] max-w-full"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </div>
  );
}
