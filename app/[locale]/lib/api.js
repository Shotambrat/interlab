export async function fetchBlogs(page) {
  const res = await fetch(
    `http://213.230.91.55:8100/api/blog/get-all?page=${page}`,
    {
      headers: {
        "Accept-Language": "ru",
      },
    }
  );
  const data = await res.json();
  return data;
}

export async function fetchBlogBySlug(slug) {
  const res = await fetch(
    `http://213.230.91.55:8100/api/blog/get/${slug}`,
    {
      headers: {
        "Accept-Language": "ru",
      },
    }
  );
  const data = await res.json();
  return data;
}
