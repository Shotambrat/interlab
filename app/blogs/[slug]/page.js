"use client"
import Image from "next/image";
import { fetchBlogBySlug } from '@/app/lib/api';
import { useState, useEffect } from "react";


export default function page() {
    const [blog, setBlog] = useState([]);
  
    useEffect(() => {
      const getBlogs = async () => {
        const data = await fetchBlogBySlug();
        setBlog(data.data);
      };
      getBlogs();
    }, []);
  return (
    <div className="w-full bg-white px-2">
      <div className="w-full max-w-[1440px] mx-auto flex gap-32 pb-32 pt-12">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-4xl max-mdx:text-3xl font-bold ">
            Важность сдачи анализа на холестерин
          </h1>
          <Image
          src={blog.photoUrl}
          width={1500}
          height={1500}
          alt="Banner Blog's"
          className="w-full h-[600px] object-cover rounded-[40px]"
          />
          
        </div>
      </div>
    </div>
  );
}
