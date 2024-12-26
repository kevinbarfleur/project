import React from 'react';
import { Link } from '../components/Link';

export function Blog() {
  const posts = [
    {
      title: "Building Scalable Systems",
      date: "2024-03-15",
      description: "Insights and best practices for creating robust distributed systems",
      tags: ["Architecture", "Performance", "Cloud"]
    },
    {
      title: "The Future of Web Development",
      date: "2024-03-01",
      description: "Exploring emerging trends and technologies shaping the web",
      tags: ["Web", "JavaScript", "Trends"]
    },
    {
      title: "Optimizing React Applications",
      date: "2024-02-15",
      description: "Deep dive into performance optimization techniques for React applications",
      tags: ["React", "Performance", "JavaScript"]
    },
    {
      title: "Modern CSS Techniques",
      date: "2024-02-01",
      description: "Exploring the latest CSS features and how to use them effectively",
      tags: ["CSS", "Web", "Design"]
    },
    {
      title: "TypeScript Best Practices",
      date: "2024-01-15",
      description: "Writing better TypeScript code with advanced types and patterns",
      tags: ["TypeScript", "JavaScript", "Development"]
    },
    {
      title: "The Art of Code Review",
      date: "2024-01-01",
      description: "How to conduct effective code reviews and build better team collaboration",
      tags: ["Team", "Best Practices", "Development"]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.title} className="group">
            <Link href="#" className="block space-y-3">
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <time>{post.date}</time>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="bg-gray-800 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h2 className="text-xl font-semibold text-white group-hover:text-white/80">
                {post.title}
              </h2>
              <p className="text-gray-300">
                {post.description}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
} 