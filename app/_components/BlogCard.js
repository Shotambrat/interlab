import LinkYakor from "@/app/_components/LinkYakor";

const BlogCard = ({ title, excerpt, imageSrc, slug }) => (
  <article className="flex flex-col max-md:ml-0 max-mdx:w-full">
    <div className="flex flex-col grow pb-2 mt-10">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-3 w-full aspect-[0.99] max-md:pl-5">
        <img
          loading="lazy"
          src={imageSrc}
          className="object-cover absolute inset-0 size-full"
          alt={title}
        />
        <LinkYakor slug={slug} />
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

export default BlogCard;