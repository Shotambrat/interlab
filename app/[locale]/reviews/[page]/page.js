import reviewsData from "@/json/reviews.json";
import ReviewsBody from "@/app/[locale]/_components/Reviews/ReviewsBody";
import { notFound } from "next/navigation";

// Загрузка данных на сервере внутри компонента
export default async function ReviewsPage({ params, searchParams }) {
  const totalReviews = reviewsData.length;
  const totalPages = Math.ceil(totalReviews / 6);
  const page = parseInt(params.page) || 1;

  // Проверка на корректность страницы
  if (page < 1 || page > totalPages) {
    notFound(); // Рендерим страницу 404
  }

  // Определяем ID ревью, если оно передано в query
  const reviewId = searchParams.reviewId ? parseInt(searchParams.reviewId) : null;
  let selectedReview = null;

  if (reviewId) {
    selectedReview = reviewsData.find((r) => r.id === reviewId) || null;
  }

  const start = (page - 1) * 6;
  const reviews = reviewsData.slice(start, start + 6);

  return (
    <div className="w-full pb-48 pt-12">
      <ReviewsBody
        reviews={reviews}
        currentPage={page}
        totalPages={totalPages}
        selectedReview={selectedReview}
      />
    </div>
  );
}
