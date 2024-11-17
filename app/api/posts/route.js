import { getAllPosts } from '../../lib/posts.js';

export async function GET() {
  const posts = await getAllPosts();
  return Response.json(posts);
}