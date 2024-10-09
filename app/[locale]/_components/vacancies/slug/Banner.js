export default function ServiceBanner({ title, subtitle, description, locale }) {
  const titleText = title?.[locale] || '';
  const subtitleText = subtitle?.[locale] || '';
  const descriptionText = description?.[locale] || '';

  return (
    <div className="relative bg-gray-50 pt-10 px-2">
      <div className="relative mx-auto w-full h-full xl:pb-[100px] pb-[40px] max-w-[1440px] flex max-mdx:flex-col justify-between items-center">
        <div className="flex flex-col gap-5 w-full xl:w-3/5">
          <h1 className="xl:text-4xl slg:text-4xl text-3xl font-bold text-center xl:text-left">
            <span className="text-red-400">{titleText}</span> {subtitleText}
          </h1>
          <p className="text-neutral-600 leading-4 xl:leading-5 text-center xl:text-left">
            {descriptionText}
          </p>
        </div>
      </div>
    </div>
  );
}
