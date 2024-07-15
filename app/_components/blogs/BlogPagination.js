"use client"
import React, { useState, useEffect } from 'react';
import { fetchBlogs } from '@/app/lib/api';
import Blog from "@/app/_components/BlogCard"

const BlogPagination = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs(currentPage);
      console.log(data)
      setBlogs(data.data.content);
      setTotalPages(Math.ceil(30 / 12)); // Assuming there are 30 blogs in total, adjust if necessary
    };
    getBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <Blog title={blog.title} excerpt={blog.description} slug={`blogs/${blog.slug}`} imageSrc={blog.photoUrl} />
          </div>
        ))}
      </div>
      <div className="mt-6 flex">
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