import Link from "next/link";

export default function FilterAnalyzeItems({
  title,
  shortDescription,
  price,
  slug,
  locale,
}) {
  return (
    <Link href={`analyze/${slug}`} className="w-full flex flex-col gap-5">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">{title}</h2>
          {shortDescription ? (
            <p>{shortDescription}</p>
          ) : (
            <p>Описание отсутствует</p>
          )}
        </div>
        {price != null && (
          <p className="whitespace-nowrap text-red-500 font-bold text-lg">
            {price} сум
          </p>
        )}
      </div>
      <hr />
    </Link>
  );
}

// import PortableText from '@sanity/block-content-to-react';
// import Link from 'next/link';

// export default function FilterAnalyzeItems({ title, shortDescription, price, slug, locale }) {
//   return (
//     <Link href={`/analyze/${slug}`} className="w-full flex flex-col gap-5">
//       <div className="flex justify-between items-start">
//         <div className="flex flex-col gap-4">
//           <h2 className="text-xl font-bold">{title}</h2>
//           {/* Используем PortableText для рендеринга описания */}
//           {description ? (
//             <PortableText blocks={description} />
//           ) : (
//             <p>Описание отсутствует</p>
//           )}
//         </div>
//         <p className="whitespace-nowrap text-red-500 font-bold text-lg">
//           {price} сум
//         </p>
//       </div>
//       <hr />
//     </Link>
//   );
// }
