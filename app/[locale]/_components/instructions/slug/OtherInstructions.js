import LinkYakor from "../../LinkYakor"
import ServiceItem from "../../services/ServiceItem"

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
  return (
    <div className="w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8">
        <h2 className="text-4xl font-semibold">
            Другие инструкции
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
            <LinkYakor slug={'Все инструкции'} />
        </div>
    </div>
  )
}
