import Image from "next/image";
import closeicongray from "@/public/svg/closeicon-gray.svg";
import houseCall from "@/public/images/house-call.png"

export default function ContactWithUs({ setState }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <div className="bg-white max-md:p-4 px-8 py-8 rounded-3xl shadow-lg max-mdx:w-[90%] w-[450px] relative">
        <button
          className="absolute top-5 right-5"
        //   onClick={() => {
        //     setState(false);
        //   }}
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
        <Image
            src={houseCall}
            width={500}
            height={500}
            alt="House Call Icon White red"
            className="w-36 h-36"
            />
          <div className="flex flex-col text-center gap-1 lg:px-12">
            <h3 className="text-rose-400 text-2xl font-semibold">
              Вызов на дом
            </h3>
            <p className="text-neutral-400 text-sm ">
              Заполните форму, чтобы заказать услугу
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
                  className="justify-center items-start px-4 py-4 bg-white border-neutral-400 border rounded-xl max-md:pr-5 max-md:max-w-full"
                  placeholder="ФИО *"
                  required
                />
                <label htmlFor="phoneNumber" className="sr-only">
                  Номер телефона
                </label>
                <input
                  id="phoneNumber"
                  type="tel"
                  className="justify-center items-start px-4 py-4 mt-4 bg-white border-neutral-400 border rounded-xl max-md:pr-5 max-md:max-w-full"
                  placeholder="Номер телефона *"
                  required
                />
                <div className="flex gap-5 justify-center py-4 pr-20 pl-5 mt-4 bg-white border-neutral-400 border rounded-xl text-zinc-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                  <select
                    id="service"
                    className="appearance-none bg-transparent border-none"
                  >
                    <option value="">Интересующая услуга</option>
                  </select>
                </div>
                <label htmlFor="comment" className="sr-only">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  className="justify-center border-neutral-400 border items-start px-4 py-4 mt-4 bg-white rounded-xl text-neutral-400 max-md:pr-5 max-md:max-w-full"
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
