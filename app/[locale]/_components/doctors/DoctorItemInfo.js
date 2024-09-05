import DoctorInfoItem from "./DoctorInfoItem"

export default function DoctorItemInfo() {
    const data = [
        {
            title: 'Опыт работы',
            description: ['16 лет практики']
        },
        {
            title: 'Знание языков',
            description: ['Свободный русский и узбекский']
        },
        {
            title: 'Образование',
            description: ['Ташкентский медицинский институт 1989-1995 Факультет-лечебное дело', 'Кафедра акушерства и гинекологии ТашИУВ февраль 2018', 'Ученая степень: Кандидат медицинских наук', 'Квалификация: Врач высшей категории']
        },
        {
            title: 'Достижения',
            description: ['Разработка нового метода лечения', 'Оказание медицинской помощи в кризисных зонах', 'Разработка программ по профилактике заболеваний']
        },
    ]
  return (
    <div className='w-full flex flex-col gap-12'>
        <h2 className='mdl:text-4xl text-2xl font-bold'>Информация о специалисте</h2>
        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {data.map((item, i) => {
                return <DoctorInfoItem key={i} title={item.title} description={item.description} />
            })}
        </div>
    </div>
  )
}
