import LinkYakor from "../../LinkYakor"
import ServiceItem from "../../services/ServiceItem"
import { useTranslations } from "next-intl"

const data = [
    {
        title: 'Анализы крови',
        description: '',
        url: 'blood'
    },
    {
        title: 'Анализы мочи',
        description: '',
        url: ''
    },
    {
        title: 'Анализы фекалия',
        description: '',
        url: 'sheet'
    },
]

export default function OtherInstructions() {
  const t = useTranslations('Instructions')
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">
            {t('other')}
        </h2>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item, index) => {
          return (
            <ServiceItem
              key={index}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          );
        })}
        </div>
        <div>
            <LinkYakor slug={t('all')} />
        </div>
    </div>
  )
}
