import Link from "next/link";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetailPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <span className="text-xs sm:text-sm text-indigo-500 font-semibold uppercase tracking-wide">
        User #{post.userId}
      </span>
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-3 mb-5 sm:mb-8 text-gray-900 leading-tight">
        {post.title}
      </h1>
      <div className="prose prose-sm sm:prose-base lg:prose-lg text-gray-600 leading-relaxed mb-10">
        <p>{post.body}</p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition font-medium text-sm sm:text-base"
      >
        <span className="mr-2">←</span> Back to Blog
      </Link>
    </div>
  );
}
