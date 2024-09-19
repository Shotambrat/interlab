import { useTranslations } from "next-intl"

const data = [
    {
        title: '',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
    {
        title: 'Inst Inst Inst ',
        description: 'Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst Inst '
    },
]

export default function InstructionBody() {
    const t = useTranslations('Instructions')
  return (
    <div className="w-full max-w-[1440px] px-2 mx-auto flex flex-col gap-6">
        <h2 className="text-4xl font-semibold">
            {t('instruction')}
        </h2>
        {
            data.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))
        }
    </div>
  )
}
