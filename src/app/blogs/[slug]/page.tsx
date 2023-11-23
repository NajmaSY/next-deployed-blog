import Link from "next/link";
import { getPosts, getPostsBySlug } from "../../../lib/post";
import { notFound } from "next/navigation";

type blogPostParams = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  const posts = getPosts();
  return posts.map((post) => {
    return { slug: post.slug };
  });
}

export default function Page({ params }: blogPostParams) {
  const post = getPostsBySlug(params.slug);

  if (!post) {
    notFound();
  }
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="text-2xl">{post.title}</h1>
      {post.content}
      <br />
      <Link href="/blogs">Back to posts</Link>
    </main>
  );
}
