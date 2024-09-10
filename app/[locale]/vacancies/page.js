import Banner from "../_components/vacancies/Banner";
import WhyIntermed from "../_components/vacancies/WhyIntermed";


export default function page() {
  return (
    <div className="w-full flex flex-col gap-48 bg-white pb-48">
        <Banner />
        <WhyIntermed />
    </div>
  )
}
