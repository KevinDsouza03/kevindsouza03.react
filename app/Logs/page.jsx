import BlogList from '../components/BlogList';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-zinc-800 p-5">
      <div className="max-w-4xl mx-auto bg-zinc-900/30 p-8 rounded-lg">
        <h1 className="text-3xl font-bold text-white mb-8">Blog Posts</h1>
        <BlogList />
      </div>
    </div>
  );
}