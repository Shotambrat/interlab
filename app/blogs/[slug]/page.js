"use client"
import Image from "next/image";
import { fetchBlogBySlug } from '@/app/lib/api';
import { useState, useEffect } from "react";
import Blog from "@/app/_components/Blog";
import ButtonLinkBorder from "@/app/_components/buttons/ButtonLinkBorder";
import Link from "next/link";


export default function page() {
    const [blog, setBlog] = useState([]);
    const [parsedBody, setParsedBody] = useState([]);
  
    useEffect(() => {
      const getBlog = async () => {
        const data = await fetchBlogBySlug();
        setBlog(data.data);
        const parsed = parseBlogContent(data.data.body);
        setParsedBody(parsed);
      };
      getBlog();
    }, []);


    const parseBlogContent = (content) => {
      const sections = content.split('\n\n');
      return sections.map(section => {
        if (section.includes('\n')) {
          const items = section.split('\n');
          return {
            type: 'list',
            items
          };
        } else {
          return {
            type: 'paragraph',
            text: section
          };
        }
      });
    };
  return (
    <div className="w-full bg-white px-2">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col gap-32 pb-32 pt-12">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-4xl max-mdx:text-3xl font-bold ">
            Важность сдачи анализа на холестерин
          </h1>
          <Image
          src={blog.photoUrl}
          width={1500}
          height={1500}
          alt="Banner Blog's"
          className="w-full h-[350px] mdx:h-[600px] object-cover rounded-[40px]"
          />
                      <div className="flex flex-col gap-5">
              {parsedBody.map((section, index) => {
                if (section.type === 'paragraph') {
                  return <p key={index} className="text-lg">{section.text}</p>;
                }
                if (section.type === 'list') {
                  return (
                    <ul key={index} className="list-disc pl-5">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-lg">{item}</li>
                      ))}
                    </ul>
                  );
                }
              })}
            </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl max-mdx:text-3xl font-bold">
              Другие новости
          </h2>
          <Blog />
          <div className="w-full flex justify-center">
            <Link href="/blogs">
            
            <ButtonLinkBorder title={"Все новости"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
