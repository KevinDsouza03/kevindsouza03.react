import { getPost, getAllPosts } from '@/app/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for the post
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  
  if (!post) {
    notFound();
  }

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html)
    .process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="min-h-screen bg-zinc-800 p-5">
      <article className="max-w-4xl mx-auto bg-zinc-900/30 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
        <div className="text-zinc-400 mb-8">
          {new Date(post.date).toLocaleDateString()}
        </div>
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  );
}