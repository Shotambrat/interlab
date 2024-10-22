"use client";

import { useState, useEffect } from "react";
import FilterCategory from "@/app/[locale]/_components/analyze/FilterCategory";
import FilterAnalyzeItems from "./FilterAnalyzeItems";
import { client } from "@/sanity/lib/client";
import { Select, Spin } from 'antd'; // Spin для индикатора загрузки
import { DownOutlined } from '@ant-design/icons';

export default function Filter({ params }) {
  const { locale } = params;
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [tests, setTests] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true); // Состояние загрузки категорий
  const [loadingTests, setLoadingTests] = useState(false); // Состояние загрузки тестов

  // Загружаем категории
  useEffect(() => {
    const fetchCategories = async () => {
      setLoadingCategories(true); // Включаем состояние загрузки категорий
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
          setActiveCategory(categoriesData[0].slug.current); // Устанавливаем первую категорию как активную
        }
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
      } finally {
        setLoadingCategories(false); // Отключаем состояние загрузки категорий
      }
    };
    fetchCategories();
  }, []);

  // Загружаем тесты при изменении активной категории
  useEffect(() => {
    const fetchTests = async () => {
      if (!activeCategory) return;
      setLoadingTests(true); // Включаем состояние загрузки тестов
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
      } finally {
        setLoadingTests(false); // Отключаем состояние загрузки тестов
      }
    };
    fetchTests();
  }, [activeCategory]);

  // Функция переключения категории
  const handleFilter = (categorySlug) => {
    setActiveCategory(categorySlug);
  };

  // Для мобильной версии формируем массив категорий для селекта
  const mobileCategoryOptions = categories.map(category => ({
      value: category.slug.current,
      label: category.name[locale] || category.name.ru
  }));

  return (
    <div className="w-full h-auto bg-white max-mdl:px-4">
      <div className="w-full max-w-[1440px] mx-auto h-auto flex max-mdl:flex-col gap-10">
        
        {/* Desktop version of categories */}
        <div className="w-full mdl:max-w-1/3 mdl:w-1/3 flex flex-col gap-3 h-auto max-mdl:hidden">
          {loadingCategories ? (
            <Spin size="large" /> // Индикатор загрузки категорий
          ) : (
            categories.map((category) => (
              <FilterCategory
                key={category._id}
                title={category.name[locale]}
                catname={category.slug.current}
                handleFilter={handleFilter}
                active={activeCategory}
              />
            ))
          )}
        </div>

        {/* Mobile version of category filter */}
        <div className="mdl:hidden w-full mb-4">
          {loadingCategories ? (
            <Spin size="large" /> // Индикатор загрузки для мобильной версии
          ) : (
            <Select
              defaultValue={activeCategory}
              className='custom-select'
              options={mobileCategoryOptions}
              onChange={value => handleFilter(value)}
              suffixIcon={<DownOutlined style={{ color: 'white' }} />} // Белая стрелка
              style={{
                backgroundColor: '#FB6A68', // Красный фон
                color: 'white', // Белый текст
                borderRadius: '50px', // Закругленные края
                height: '48px', // Высота кнопки
                fontSize: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              dropdownStyle={{
                backgroundColor: '#fff', // Белый фон для выпадающего списка
                borderRadius: '10px', // Закругление краев выпадающего списка
              }}
              popupClassName="custom-select-dropdown" // Класс для стилизации выпадающего списка
            />
          )}
        </div>

        {/* List of filtered tests */}
        <div className="w-full mdl:max-w-2/3 mdl:w-2/3 flex flex-col gap-3 h-auto">
          {loadingTests ? (
            <Spin size="large" /> // Индикатор загрузки тестов
          ) : (
            tests.map((test) => (
              <FilterAnalyzeItems
                key={test._id}
                title={test.name[locale]}
                shortDescription={test.shortDescription[locale]}
                price={test.price}
                slug={test.slug?.current}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
