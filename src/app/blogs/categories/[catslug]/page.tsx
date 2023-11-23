import Link from "next/link";
import { getCategory, getPostsByCategory } from "../../../../lib/post";
import { notFound } from "next/navigation";

type categoryParams = {
  params: {
    catslug: string;
  };
};

export function generateStaticParams() {
  const categories = getCategory();
  return categories.map((category) => {
    return { catslug: category.category };
  });
}

export default function Page({ params }: categoryParams) {
  const posts = getPostsByCategory(params.catslug);

  if (!posts) {
    notFound();
  }
  return (
    <div>
      <h1>Category: {params.catslug}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
      <br />
      <Link href="/blogs">Back to posts</Link>
    </div>
  );
}
