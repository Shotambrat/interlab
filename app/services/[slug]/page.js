export default function Page({ params }) {
  return <div>My Post: {params.slug}</div>;
}

export async function generateStaticParams() {
    const posts = await fetch('http://213.230.91.55:8100/service/slug').then((res) => res.json())
   
    return posts.map((post) => ({
      slug: post.slug,
    }))
  }