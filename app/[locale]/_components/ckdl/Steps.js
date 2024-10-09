import { useTranslations } from "next-intl";

export default function Steps() {
  const t = useTranslations("CKDL.steps");

  // Используем t.raw() для получения данных как есть
  const steps = t.raw("list");

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-[1440px] relative mx-auto">
      {/* Left side - title and description */}
      <div className="w-full lg:w-1/2 pr-4 lg:h-[200px] lg:sticky top-4">
        <h2 className="text-3xl font-bold mb-4">{t("heading")}</h2>
        <p className="text-lg mb-8">{t("description")}</p>
      </div>

      {/* Right side - steps */}
      <div className="w-full lg:w-1/2 relative">
        {/* Vertical line */}
        <div className="absolute h-full border-l-2 border-[#FFEFEF] left-5 top-0"></div>

        <div className="flex flex-col gap-8">
          {/* Проверяем, является ли steps массивом */}
          {Array.isArray(steps) ? (
            steps.map((step, index) => (
              <div key={index} className="relative pl-16 flex flex-col gap-2">
                {/* Step number inside a rounded square */}
                <div className="absolute left-0 top-0 w-10 h-10 text-xl bg-[#FFEFEF] text-[#FB6A68] flex items-center justify-center font-bold rounded-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold text-[#FB6A68]">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))
          ) : (
            <p>Steps data is unavailable</p>
          )}
        </div>
      </div>
    </div>
  );
}
