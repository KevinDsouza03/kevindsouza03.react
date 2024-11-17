'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post) => {
        // Remove spaces and special characters from slug
        const safeSlug = post.slug.replace(/\s+/g, '-').toLowerCase();
        
        return (
          <Link 
            href={`/Logs/${safeSlug}`}
            key={safeSlug}
            className="block p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
            <p className="text-zinc-300">{post.excerpt}</p>
            <div className="text-zinc-400 text-sm mt-4">
              {new Date(post.date).toLocaleDateString()}
            </div>
          </Link>
        );
      })}
    </div>
  );
}