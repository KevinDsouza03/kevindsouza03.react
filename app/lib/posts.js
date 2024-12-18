import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content', 'posts'); // Make sure this path is correct

export async function getAllPosts() {
  try {
    console.log("getAllPosts running")
    const files = await fs.readdir(postsDirectory);
    const posts = await Promise.all(
      files
        .filter((file) => path.extname(file) === '.md')
        .map(async (file) => {
          const filePath = path.join(postsDirectory, file);
          const fileContent = await fs.readFile(filePath, 'utf8');
          const { data, content } = matter(fileContent);
          
          return {
            slug: path.basename(file, '.md'),
            title: data.title,
            date: data.date,
            excerpt: data.excerpt || '',
            content,
            ...data,
          };
        })
    );

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    console.log("getPost Running")
    return {
      slug,
      content,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
      ...data,
    };
  } catch (error) {
    console.error('Error reading post:', error);
    return null;
  }
}