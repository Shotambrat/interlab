
const BlogCard = ({ title, excerpt, imageSrc }) => (
    <article className="flex flex-col xl:w-1/5 w-1/3 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow pb-2 mt-10">
        <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-3 w-full aspect-[0.99] max-md:pl-5">
          <img
            loading="lazy"
            src={imageSrc}
            className="object-cover absolute inset-0 size-full"
            alt={title}
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d06c8d085673ac906cf9dd8597fcb59f9eedcfa3881657c2506df406e930a725?apiKey=e791e0f42eab4556ac944da69358f29b&"
            className="mt-48 aspect-square w-[60px] max-md:mt-10"
            alt="Blog post icon"
          />
        </div>
        <div className="flex flex-col mt-2">
          <h3 className="text-xl mdx:text-3xl font-bold text-neutral-900 leading-6">
            {title}
          </h3>
          <p className="mt-1 text-md text-ellipsis leading-4 text-zinc-500">
            {excerpt}
          </p>
        </div>
      </div>
    </article>
  );

export default function Blog() {
  return (
    <div className="mt-2 mdx:mt-12 w-full">
      <div className="flex justify-center gap-5 flex-col md:flex-row max-md:gap-0 md:flex-wrap">
        <BlogCard
          title="Работа возобновлена"
          excerpt="Мы работаем в штатном режиме"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/66ac89f566eb9ae01ed144c927ca88299c96df6f492199b11044dc1aa1ebfd9f?apiKey=e791e0f42eab4556ac944da69358f29b&"
        />
        <BlogCard
          title="Важность сдачи анализа на холестерин"
          excerpt="Анализ на холестерин являетя одним из самых важных"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c93d818bbe0885dbe1f9be274a5ae09b6a061e893019ea57aaa6e46b87491b7a?apiKey=e791e0f42eab4556ac944da69358f29b&"
        />
        <BlogCard
          title="Анализ на вирус герпеса"
          excerpt="Анализ на герпес – это медицинское исследование, которое позволяет выявить наличие различных форм вируса в организме человека."
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/26074a35bbe3634556451fcee77e7f52d2af29b8b6b71202a7589067bc6ba9b6?apiKey=e791e0f42eab4556ac944da69358f29b&"
        />
        <BlogCard
          title="Анализ на тиреотропный гормон"
          excerpt="В большинстве случаев анализ на ТТГ в Ташкенте назначают для определения гипотиреоза или тиреотоксикоза"
          imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/113dda07e062c46dab241bf28df8177d39f2d1d9ccf71890d9d236451f9fea45?apiKey=e791e0f42eab4556ac944da69358f29b&"
        />
      </div>
    </div>
  );
}
