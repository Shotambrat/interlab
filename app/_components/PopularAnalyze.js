import PopularAnalyzeItem from "@/app/_components/PopularAnalyzeItem";

export default function PopularAnalyze() {
  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-start">
        <h2 className="font-bold text-3xl">Популярные анализы</h2>
        <p className="text-neutral-400 w-full max-w-[400px]">
          Получите результат анализа онлайн за один день! (распространяется на
          большинство анализов)
        </p>
        <p className="bg-rose-100 text-rose-400 font-semibold rounded-full px-4 py-2">
          Сдача анализов с 7:00 до 16:00
        </p>
      </div>
      <div className="w-full flex gap-4 flex-wrap">
            <PopularAnalyzeItem />
      </div>
      <div className="w-full flex justify-center">
        <a
          href="/analyze"
          className="flex gap-2 justify-center self-center px-10 py-3.5 mt-9 text-base font-bold text-center text-red-400 border border-red-400 border-solid rounded-[100px] max-md:px-5"
        >
          <span className="my-auto">Посмотреть все</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d858dea97bb716ac0dba9d09749ab621dbd0b3df5fbd758926ae17f2daf60f0?apiKey=e791e0f42eab4556ac944da69358f29b&"
            className="shrink-0 aspect-square w-[23px]"
            alt="Arrow icon"
          />
        </a>
      </div>
    </div>
  );
}
