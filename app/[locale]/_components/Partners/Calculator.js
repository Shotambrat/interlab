import { useTranslations } from "next-intl";
import React from "react";

export default function Calculator() {
  const t = useTranslations("Partners.calculator");

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-4 mx-auto p-2">
      <h2 className="text-3xl font-semibold">{t("heading")}</h2>
      <div className="w-full shadow-3xl rounded-2xl grid grid-cols-1 mdl:grid-cols-2 gap-8 p-8">
        <div className="flex flex-col gap-12 items-start">
          <div className="flex flex-col gap-4 w-full">
            <p>{t("currentCosts")}</p>
            <input
              placeholder={t("currentCosts")}
              className="w-full rounded-xl border border-neutral-400x p-3 focus:ring-1 ring-red-500 focus:border-red-500 focus:outline-red-500"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p>{t("currentCosts")}</p>
            <input
              placeholder={t("currentCosts")}
              className="w-full rounded-xl border border-neutral-400x p-3 focus:ring-1 ring-red-500 focus:border-red-500 focus:outline-red-500"
            />
          </div>
          <button className="px-16 py-3 rounded-full text-white bg-red-400">
            {t("calculate")}
          </button>
        </div>
        <div className="flex flex-col gap-12 items-start bg-gray-100 rounded-2xl justify-around p-8">
          <div className="flex flex-col gap-8 w-full">
            <div>
              <p className="text-3xl text-red-400">{t("savedMoney")}</p>
              <p className="text-neutral-400">{t("savedText")}</p>
            </div>
            <hr className="w-full" />
            <div>
              <p className="text-3xl">{t("savedPercentage")}</p>
              <p className="text-neutral-400">{t("savedText")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
