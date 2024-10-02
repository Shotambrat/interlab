import Image from "next/image";
import aboutFirstImage from "@/public/images/about-first-image.png";
import aboutSecondImage from "@/public/images/about/second.png";
import aboutThirdImage from "@/public/images/about/third.png";
import aboutFourthImage from "@/public/images/about/four.png";
import { useTranslations } from "next-intl";

function AboutInfo() {
  const t = useTranslations("About.more-info");
  function formatTextWithNewlines(text) {
    // Заменим все вхождения \n на <br />
    return text.replace(/\n/g, "<br />");
  }

  return (
    <section className="px-5 w-full max-w-[1440px] mx-auto flex flex-col gap-4 mt-20">
      <h2 className="text-3xl font-bold mb-0">
        {t("title")} <span className="text-rose-400">{t("subtitle")}</span>
      </h2>
      <p
        className="text-neutral-600 w-full max-w-[700px]"
        dangerouslySetInnerHTML={{
          __html: formatTextWithNewlines(t("description")),
        }}
      />
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-3 grid-rows-2 gap-4 max-lg:hidden w-full h-[500px]">
          <div className="row-span-2">
            <Image
              src={aboutFirstImage}
              alt="Image 1"
              height={1000}
              quality={100}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
          <div>
            <Image
              src={aboutSecondImage}
              alt="Image 2"
              quality={100}
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
          <div className="col-start-2 row-start-2">
            <Image
              src={aboutThirdImage}
              alt="Image 3"
              quality={100}
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
              style={{ aspectRatio: '1 / 1' }}
            />
          </div>
          <div className="row-span-2 col-start-3 row-start-1">
            <Image
              src={aboutFourthImage}
              alt="Image 4"
              quality={100}
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
              style={{ aspectRatio: '1 / 1' }}
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
              src={aboutSecondImage}
              alt="Image 2"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 col-start-1 row-start-4">
            <Image
              src={aboutThirdImage}
              alt="Image 3"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3 col-start-2 row-start-3">
            <Image
              src={aboutFourthImage}
              alt="Image 4"
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>

        <div class="grid gap-4 mdx:hidden w-full ">
          <div className="row-span-3">
            <Image
              src={aboutFirstImage}
              alt="Image 1"
              height={1000}
              quality={100}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 row-start-4">
            <Image
              src={aboutSecondImage}
              alt="Image 2"
              height={1000}
              quality={100}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-3 row-start-6">
            <Image
              src={aboutThirdImage}
              alt="Image 3"
              quality={100}
              height={1000}
              width={1000}
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="row-span-2 row-start-9">
            <Image
              src={aboutFourthImage}
              alt="Image 4"
              quality={100}
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
