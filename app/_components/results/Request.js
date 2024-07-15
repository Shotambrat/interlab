import Image from "next/image";
import warning from "@/public/svg/warning.svg";

export default function Request() {
  return (
    <div className="w-full bg-white py-14 px-2">
      <div className="w-full max-w-[1440px] flex flex-col gap-10 mx-auto">
        <div className="w-full flex flex-col gap-5">
          <form className="grid lg:grid-cols-3 w-full gap-5 grid-cols-1">
            <input
              type="number"
              placeholder="№ Медецинской карты"
              id="mednumber"
              name="mednumber"
              //   value={formData.name}
              //   onChange={handleChange}
              required
              className="border border-neutral-300 px-4 rounded-xl py-3 focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400"
            />
            <input
              type="number"
              placeholder="№ Регистрации"
              id="mednumber"
              name="mednumber"
              //   value={formData.name}
              //   onChange={handleChange}
              required
              className="border border-neutral-300 px-4 rounded-xl py-3  focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400"
            />
            <div className="relative">
              <select
                className="block focus:outline-none focus:ring-1 focus:ring-red-400 focus:border-red-400 appearance-none border border-neutral-300 w-full  bg-white px-4 py-3 pr-8 rounded-xl"
                defaultValue=""
              >
                <option value="" disabled>
                  Выберите язык
                </option>
                <option value="ru">Русский</option>
                <option value="uz">O`zbekcha</option>
                {/* Add more options as needed */}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </form>
          <div className="gap-4 px-4 py-4 flex rounded-2xl bg-red-100 md:items-center">
            <Image
              src={warning}
              width={100}
              height={100}
              alt="Warniing Icon"
              className="w-6 h-6"
            />
            <p className="text-red-400">
              Результаты анализов также отправляются на номер телефона,
              указанный при регистрации. Настоятельно рекомендуем указывать свой
              личный номер, во избежание получения результатов третьими лицами.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="text-white bg-red-400 py-3 px-14 text-sm font-semibold rounded-full"
          >
            Получить
          </button>
        </div>
      </div>
    </div>
  );
}
