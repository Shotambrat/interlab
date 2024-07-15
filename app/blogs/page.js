import Sale from "@/app/_components/Sale";
import BlogPagination from "@/app/_components/blogs/BlogPagination";

export default function page() {
  return (
    <div>
      <div className="w-full bg-white ">
        <div className="max-w-[1440px] w-full mx-auto py-24 px-2 flex flex-col gap-52">
          <div>

          <h2 className="text-4xl max-md:text-2xl font-bold mb-4 xl:w-[50%]">
            Выгодные предложения и полезные советы от клиники{" "}
            <span className="text-red-500">Intermed</span>
          </h2>
          <Sale />
          </div>
          <div>
          <h2  className="text-4xl max-md:text-2xl font-bold mdl:mb-8">
            Блог
          </h2>
          <BlogPagination />
          </div>
        </div>
      </div>
    </div>
  );
}
