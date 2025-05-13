import BlogList from '../components/BlogList';

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto bg-soft-black bg-opacity-30 p-8 rounded-lg">
      <h1 className="text-3xl font-bold text-creme mb-8">Blog Posts</h1>
      <BlogList />
    </div>
  );
}