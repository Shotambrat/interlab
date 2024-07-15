import BlogCard from "@/app/_components/BlogCard"

export default function Blog() {
  return (
    <div className="w-full max-md:px-2">
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-5 max-md:gap-0">
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
