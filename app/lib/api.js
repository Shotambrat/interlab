export async function fetchBlogs(page) {
  const res = await fetch(
    `http://213.230.91.55:8100/blog/get-all-page?page=${page}`
  );
  const data = await res.json();
  return data;
}
