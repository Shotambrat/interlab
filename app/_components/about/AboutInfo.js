import Image from "next/image";
import aboutFirstImage from "@/public/images/about-first-image.png";

function AboutInfo() {
  return (
    <section className="px-5 w-full max-w-[1440px] mx-auto flex flex-col gap-5 mt-24">
      <h2 className="text-3xl font-bold">
        Клиника <span className="text-rose-400">Intermed</span>
      </h2>
      <p className="text-neutral-600 w-full max-w-[700px]">
        Клиника Intermed — это современный медицинский центр, предоставляющий
        полный спектр услуг для диагностики, лечения и профилактики заболеваний
      </p>
      <p className="text-neutral-600 w-full max-w-[700px]">
        Мы стремимся к высокому качеству обслуживания и заботимся о здоровье
        наших пациентов, предлагая передовые медицинские технологии и
        индивидуальный подход
      </p>
      <div className="w-full flex justify-center">
        <div class="grid grid-cols-3 grid-rows-2 gap-4 max-lg:hidden w-full h-[500px]">
          <div className="row-span-2">
            <Image
              src={aboutFirstImage}
              alt="Image 1"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div>
            <Image
              src={aboutFirstImage}
              alt="Image 2"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="col-start-2 row-start-2">
            <Image
              src={aboutFirstImage}
              alt="Image 3"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <Image
              src={aboutFirstImage}
              alt="Image 4"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>



        <div class="grid grid-cols-2 grid-rows-5 gap-4 max-mdx:hidden lg:hidden w-full h-[600px]">
          <div className="row-span-3">
            <Image
              src={aboutFirstImage}
              alt="Image 1"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2">
            <Image
              src={aboutFirstImage}
              alt="Image 2"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-4">
            <Image
              src={aboutFirstImage}
              alt="Image 3"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-3">
            <Image
              src={aboutFirstImage}
              alt="Image 4"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>



        <div class="grid grid-cols-1 grid-rows-10 gap-4 mdx:hidden w-full h-[800px]">
          <div className="row-span-3">
            <Image
              src={aboutFirstImage}
              alt="Image 1"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 row-start-4">
            <Image
              src={aboutFirstImage}
              alt="Image 2"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3 row-start-6">
            <Image
              src={aboutFirstImage}
              alt="Image 3"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 row-start-9">
            <Image
              src={aboutFirstImage}
              alt="Image 4"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
