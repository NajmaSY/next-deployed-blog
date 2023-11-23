import Link from "next/link";
import { getPosts } from "../../lib/post";

export default function Page() {
  const posts = getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>This is the blogs page!</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
