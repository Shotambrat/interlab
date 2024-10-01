"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Blog from "@/app/[locale]/_components/Blog";
import ButtonLinkBorder from "@/app/[locale]/_components/buttons/ButtonLinkBorder";
import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";
import { useTranslations } from "next-intl";

export default function Page({ params }) {
  const [blog, setBlog] = useState(null);
  const t = useTranslations('')

  useEffect(() => {
    const fetchBlogBySlug = async (slug) => {
      const query = `
        *[_type == "news" && slug.current == $slug][0]{
          title,
          content,
          photo{
            asset->{
              url
            }
          },
          publishedAt,
          relatedNews[]->{
            title,
            slug
          }
        }
      `;

      const data = await client.fetch(query, { slug });
      return data;
    };

    const getBlog = async () => {
      const data = await fetchBlogBySlug(params.slug);
      setBlog(data);
    };

    getBlog();
  }, [params.slug]);

  console.log(blog, params.slug)

  if (!blog) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="w-full bg-white px-2">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-32 pb-32 pt-12">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-4xl max-mdx:text-3xl font-bold ">
            {blog.title.ru || blog.title.uz}
          </h1>
          <Image
            src={blog.photo.asset.url}
            width={1500}
            height={1500}
            alt="Banner Blog's"
            className="w-full h-[350px] mdx:h-[600px] object-cover rounded-[40px]"
          />
          <div className="flex flex-col gap-5">
            {/* Использование BlockContent для рендеринга текста */}
            <BlockContent
              blocks={blog.content.ru || blog.content.uz}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl max-mdx:text-3xl font-bold">{t('Blog.other')}</h2>
          <Blog locale={params.locale} />
          <div className="w-full flex justify-center">
            <Link href={`/${params.locale}/blogs`}>
              <ButtonLinkBorder title={t('Main.Blogs.more')} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
