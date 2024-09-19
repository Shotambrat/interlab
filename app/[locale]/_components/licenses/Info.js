import { useTranslations } from "next-intl";

export default function Info() {
  const t = useTranslations("Licencies");

  // Access the translated array directly using t and map over it
  const dataArr = t.raw("about.data"); // Use `.raw()` to get the array data

  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-6">
      <h2 className="text-4xl font-semibold">{t('about.title')}</h2>
      <div className="w-full grid grid-cols-1 slg:grid-cols-2 gap-4">
        {dataArr.map((item, index) => (
          <div key={index} className="border border-neutral-300 rounded-3xl p-4 flex flex-col gap-4">
            <h1 className="text-xl text-red-400 font-semibold">
              {item.title}
            </h1>
            <p
              dangerouslySetInnerHTML={{
                __html: item.description.replace(/\n/g, "<br />"),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
