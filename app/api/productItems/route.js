export async function GET(req) {
  const { locale } = req.nextUrl;

  // В зависимости от локали возвращаем разные данные
  const products = locale === 'ru' 
    ? await fetchProductsFromDatabase('ru')
    : await fetchProductsFromDatabase('uz');

  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function fetchProductsFromDatabase(locale) {
  // Логика получения данных из базы данных в зависимости от локали
  if (locale === 'ru') {
    return [
      { id: 1, name: 'Продукт 1', description: 'Описание 1' },
      { id: 2, name: 'Продукт 2', description: 'Описание 2' },
    ];
  } else {
    return [
      { id: 1, name: 'Mahsulot 1', description: 'Tavsif 1' },
      { id: 2, name: 'Mahsulot 2', description: 'Tavsif 2' },
    ];
  }
}