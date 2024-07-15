export async function fetchBlogs(page) {
  const res = await fetch(
    `http://213.230.91.55:8100/blog/get-all-page?page=${page}`,
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
    `http://213.230.91.55:8100/blog/get-blog/9-title-uz`,
    {
      headers: {
        "Accept-Language": "ru",
      },
    }
  );
  const data = await res.json();
  return data;
}
