import ReviewsBody from "@/app/[locale]/_components/Reviews/ReviewsBody";
import reviewsData from "@/json/reviews.json"; // временный импорт
import { notFound } from "next/navigation";

// Функция для генерации статических путей
export async function generateStaticParams() {
  const totalReviews = reviewsData.length;
  const totalPages = Math.ceil(totalReviews / 6);

  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

// Рендеринг метаданных для SEO
export function generateMetadata({ params }) {
  const page = params.page || 1;
  return {
    title: `Отзывы - Страница ${page}`,
    description: `Отзывы наших партнеров - страница ${page}`,
  };
}

export default async function ReviewsPage({ params }) {
  console.log(params)
  const page = parseInt(params.page) || 1;
  const limit = 6;
  const totalReviews = reviewsData.length;
  const totalPages = Math.ceil(totalReviews / limit);

  // Если запрашиваемая страница выходит за пределы диапазона страниц
  if (page < 1 || page > totalPages) {
    notFound();
  }

  const start = (page - 1) * limit;
  const reviews = reviewsData.slice(start, start + limit);

  return (
    <div className="w-full pb-48 pt-20">
      {
        JSON.stringify(params)
      }
      <ReviewsBody
        reviews={reviews}
        currentPage={page}
        totalPages={totalPages}
      />
    </div>
  );
}
