import ServiceItem from "../services/ServiceItem";
import { useTranslations } from "next-intl";

const data = [
  {
    title: "Анализы крови",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Анализы мочи",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Анализ фекалий",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Биохимические анализы",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Иммунологические анализы",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Гормональные анализы",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Микробиологические анализы",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Серологические анализы",
    description: "",
    url: "instructions/alyze",
  },
  {
    title: "Генетические анализы",
    description: "",
    url: "instructions/alyze",
  },
];

export default function List({locale}) {
  const t = useTranslations('Instructions')
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
      <h2 className="text-4xl font-semibold">{t('instruction')}</h2>
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
              locale={locale}
            />
          );
        })}
      </div>
    </div>
  );
}
