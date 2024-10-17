export default function AnalyzeHead({ test, locale }) {
  return (
    <div className="w-full bg-slate-100 px-3">
      <div className="w-full max-w-[1440px] flex justify-between py-12 max-mdx:py-6 mx-auto">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold mdx:text-3xl text-2xl slg:text-4xl">
            {test.name[locale]}
          </h1>
          <p className="text-neutral-400 text-sm w-full max-w-[600px]">
            {test.shortDescription[locale]}
          </p>
          {/* <div className="mdl:hidden">
            <h3 className="whitespace-nowrap text-3xl font-semibold text-red-400">
              {test.price} сум
            </h3>
          </div> */}
          <div className="flex gap-3 flex-wrap text-sm">
            <button className="text-white bg-red-400 font-semibold rounded-full px-6 md:px-10 py-2">
              Сдать из дома
            </button>
            <button className="border border-red-400 text-red-400 font-semibold rounded-full px-6 md:px-10 py-2">
              Связаться
            </button>
          </div>
        </div>
        {/* <div className="max-mdl:hidden">
          <h3 className="whitespace-nowrap text-3xl font-semibold text-red-400">
            {test.price} сум
          </h3>
        </div> */}
      </div>
    </div>
  );
}
