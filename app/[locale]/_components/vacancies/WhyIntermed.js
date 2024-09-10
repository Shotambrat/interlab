import book from "@/public/images/vacancies/why-book.png";
import mrt from "@/public/images/vacancies/why-mrt.png";
import fire from "@/public/images/vacancies/why-fire.png";
import earth from "@/public/images/vacancies/why-earth.png";
import WhyIntermedItem from "./WhyIntermedItem";

const data = [
  {
    title: '',
    description: '',
    photoSrc: ''
  },
  {
    title: '',
    description: '',
    photoSrc: ''
  },
  {
    title: '',
    description: '',
    photoSrc: ''
  },
  {
    title: '',
    description: '',
    photoSrc: ''
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
