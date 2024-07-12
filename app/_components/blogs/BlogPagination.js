"use client"
import React, { useState, useEffect } from 'react';
import { fetchBlogs } from '@/app/lib/api';

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={blog.photoUrl} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{blog.title}</h3>
              <p className="text-gray-600">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <ul className="flex list-none">
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 border rounded-lg mx-1 ${currentPage === index + 1 ? 'bg-red-500 text-white' : 'bg-white text-gray-700'}`}
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