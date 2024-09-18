// Import the client for Sanity
"use client"
import { client } from '@/sanity/lib/client';
import BlogCard from '@/app/[locale]/_components/BlogCard';
import { useEffect, useState } from 'react';

export default function Blog({locale}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from Sanity
    const fetchBlogs = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "news"]{
            title,
            slug,
            shortDescription,
            photo{
              asset->{
                url
              }
            }
          }
        `);
        setBlogs(data);
      } catch (error) {
        console.error("Ошибка при загрузке данных блога:", error);
      }
    };

    fetchBlogs();
  }, []);

  if (!blogs.length) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="w-full max-md:px-2">
      <div className="grid grid-cols-1 mdx:grid-cols-2 lg:grid-cols-4 gap-5 max-md:gap-0">
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            slug={`/${locale}/blogs/${blog.slug.current}`}
            title={blog.title.ru}
            excerpt={blog.shortDescription.ru}
            imageSrc={blog.photo?.asset?.url}
          />
        ))}
      </div>
    </div>
  );
}
