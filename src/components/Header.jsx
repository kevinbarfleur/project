import React from 'react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">αf</Link>
        <div className="flex items-center gap-6">
          <Link href="/blog">Blog</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/talks">Talks</Link>
          <Link href="/sponsors">Sponsors</Link>
        </div>
      </nav>
    </header>
  );
}