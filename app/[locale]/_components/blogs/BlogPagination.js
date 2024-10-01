"use client";
import React, { useState, useEffect } from 'react';
import { client } from "@/sanity/lib/client"; // Подключаем клиента Sanity
import Blog from "@/app/[locale]/_components/BlogCard";

const BlogPagination = ({ locale }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 12; // Количество элементов на странице

  useEffect(() => {
    const getBlogs = async () => {
      // Определяем язык для заголовков и краткого описания
      const lang = locale === 'uz' ? 'uz' : 'ru';

      // Запрос на получение общего количества блогов для расчета страниц
      const countQuery = `count(*[_type == "news"])`;
      const totalCount = await client.fetch(countQuery);

      // Подсчет общего количества страниц
      const calculatedTotalPages = Math.ceil(totalCount / itemsPerPage);
      setTotalPages(calculatedTotalPages);

      // Запрос для получения блогов для текущей страницы с учетом выбранного языка
      const query = `
        *[_type == "news"]{
          title,
          slug,
          "imageSrc": photo.asset->url,
          "excerpt": shortDescription.${lang}
        } | order(publishedAt desc) [${(currentPage - 1) * itemsPerPage}...${currentPage * itemsPerPage}]
      `;
      const data = await client.fetch(query);
      setBlogs(data);
    };

    getBlogs();
  }, [currentPage, locale]); // Обновляем при изменении страницы или языка

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Сетка блогов */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div key={blog.slug.current}>
            <Blog
              title={blog.title[locale]} // Заголовок на нужном языке
              excerpt={blog.excerpt}
              slug={`blogs/${blog.slug.current}`}
              imageSrc={blog.imageSrc}
              locale={locale}
            />
          </div>
        ))}
      </div>

      {/* Пагинация */}
      <div className="mt-6 flex justify-center">
        <ul className="flex list-none">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg mx-1 ${currentPage === index + 1 ? 'bg-red-400 text-white' : 'bg-white text-gray-700'}`}
              >
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogPagination;
