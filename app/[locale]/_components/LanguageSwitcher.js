'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const { pathname, query } = router;

  return (
    <div>
      <Link href={{ pathname, query }} locale="ru">
        <span className="mr-4">Русский</span>
      </Link>
      <Link href={{ pathname, query }} locale="uz">
        <span>Ozbekcha</span>
      </Link>
    </div>
  );
}