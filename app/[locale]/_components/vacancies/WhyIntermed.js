import book from "@/public/images/vacancies/why-book.png";
import mrt from "@/public/images/vacancies/why-mrt.png";
import fire from "@/public/images/vacancies/why-fire.png";
import earth from "@/public/images/vacancies/why-earth.png";
import WhyIntermedItem from "./WhyIntermedItem";

const data = [
  {
    title: 'Профессиональный рост',
    description: 'Мы поддерживаем развитие наших сотрудников, предоставляя возможности для обучения и повышения квалификации.',
    photoSrc: book
  },
  {
    title: 'Современное оборудование',
    description: 'Работа в клинике, оснащённой новейшими медицинскими технологиями.',
    photoSrc: mrt
  },
  {
    title: 'Командный дух',
    description: 'Мы поддерживаем развитие наших сотрудников, предоставляя возможности для обучения и повышения квалификации.',
    photoSrc: fire
  },
  {
    title: 'Социальные гарантии',
    description: 'Мы предлагаем конкурентоспособные условия труда и полный социальный пакет.',
    photoSrc: earth
  },
]


export default function WhyIntermed() {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-2 flex flex-col gap-8'>
        <h2 className="text-4xl font-semibold">
            Почему Intermed?
        </h2>
        <div className="w-full grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            data.map((item, index) => {
              return (
                <WhyIntermedItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  photoSrc={item.photoSrc}
                />
              )
            })
          }
        </div>
    </div>
  )
}
