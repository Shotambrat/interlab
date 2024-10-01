"use client"

import { useState, useEffect } from "react";
import FilterCategory from "@/app/[locale]/_components/analyze/FilterCategory";
import FilterAnalyzeItems from "./FilterAnalyzeItems";
import { client } from "@/sanity/lib/client";

export default function Filter({ params }) {
  const { locale } = params;
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch(`
          *[_type == "testCategory"]{
            _id,
            name,
            slug
          }
        `);
        setCategories(categoriesData);
        if (categoriesData.length > 0) {
          setActiveCategory(categoriesData[0].slug.current);
        }
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchTests = async () => {
      if (!activeCategory) return;
      try {
        const testsData = await client.fetch(
          `*[_type == "test" && category->slug.current == $categorySlug]{
            _id,
            name,
            shortDescription,
            price,
            slug
          }`,
          { categorySlug: activeCategory }
        );
        setTests(testsData);
      } catch (error) {
        console.error("Ошибка при загрузке анализов:", error);
      }
    };
    fetchTests();
  }, [activeCategory]);

  const handleFilter = (categorySlug) => {
    setActiveCategory(categorySlug);
  };

  console.log(tests)

  return (
    <div className="w-full h-auto bg-white max-mdl:px-4">
      <div className="w-full max-w-[1440px] mx-auto h-auto flex max-mdl:flex-col gap-10">
        <div className="w-full mdl:max-w-1/3 mdl:w-1/3 flex flex-col gap-3 h-auto">
          {categories.map((category) => (
            <FilterCategory
              key={category._id}
              title={category.name[locale]}
              catname={category.slug.current}
              handleFilter={handleFilter}
              active={activeCategory}
            />
          ))}
        </div>
        <div className="w-full mdl:max-w-2/3 mdl:w-2/3 flex flex-col gap-3 h-auto">
          {tests.map((test) => (
            <FilterAnalyzeItems
              key={test._id}
              title={test.name[locale]}
              shortDescription={test.shortDescription[locale]}
              price={test.price}
              slug={test.slug?.current}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
