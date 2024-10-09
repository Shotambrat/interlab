import Link from "next/link";

const BlogCard = ({ title, excerpt, imageSrc, slug }) => (
  <article>
    <Link href={slug} className="flex flex-col max-md:ml-0 max-mdx:w-full">
      <div className="flex flex-col grow pb-2 mt-8">
        <div className="flex overflow-hidden relative flex-col items-end px-16 pt-20 pb-3 w-full aspect-[0.99] max-md:pl-5">
          <img
            loading="lazy"
            src={imageSrc}
            className="object-cover absolute inset-0 size-full rounded-3xl"
            alt={title}
          />
        </div>
        <div className="flex flex-col mt-4"> {/* Уменьшаем отступ сверху */}
          <p className="text-xl mdx:text-2xl font-bold text-neutral-900 line-clamp-3"> {/* leading-tight уменьшает высоту строки */}
            {title}
          </p>
          <p className="text-md text-ellipsis leading-5 text-zinc-500 line-clamp-2">
            {excerpt}
          </p>
        </div>
      </div>
    </Link>
  </article>
);

export default BlogCard;
