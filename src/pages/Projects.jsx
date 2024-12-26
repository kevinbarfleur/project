import React from 'react';
import { Link } from '../components/Link';

export function Projects() {
  const projects = [
    {
      title: "ProjectX",
      description: "A next-generation development toolkit for building modern applications",
      tags: ["TypeScript", "React", "Node.js"],
      stars: "2.1k"
    },
    {
      title: "DevTools Pro",
      description: "Professional-grade developer tools for enhanced productivity",
      tags: ["JavaScript", "Tools", "Productivity"],
      stars: "1.8k"
    },
    {
      title: "CloudStack",
      description: "Serverless infrastructure management made simple",
      tags: ["Cloud", "AWS", "Infrastructure"],
      stars: "3.2k"
    },
    {
      title: "WebTools",
      description: "Collection of essential tools for modern web development",
      tags: ["Web", "Development", "Tools"],
      stars: "1.5k"
    },
    {
      title: "BuildTools",
      description: "Fast and configurable build system for web applications",
      tags: ["Build", "Performance", "Tools"],
      stars: "980"
    },
    {
      title: "CodeBase",
      description: "A modern foundation for scalable web applications",
      tags: ["Framework", "TypeScript", "Full-stack"],
      stars: "4.3k"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-4xl font-bold text-white mb-8">Projects</h1>
      <div className="grid gap-6">
        {projects.map((project) => (
          <Link href="#" key={project.title} className="block p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-white">
                {project.title}
              </h2>
              <div className="flex items-center gap-1 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span>{project.stars}</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 