import React from 'react';
import { Link } from './Link';

export function Profile() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Anthony Fu</h1>
      <p className="text-gray-400 mb-6">
        Hey, I am Anthony Fu, a fanatical open sourceror.
      </p>
      
      <div className="space-y-4 text-gray-400">
        <p>
          Working at <Link href="#">NextLabs</Link>
        </p>
        <p>
          Creator of <Link href="#">Vitest</Link>, <Link href="#">Slidev</Link>, <Link href="#">VueUse</Link>, <Link href="#">UnoCSS</Link>, <Link href="#">Elk</Link>, and <Link href="#">Type Challenges</Link>
        </p>
        <p>
          Core team of <Link href="#">Vue</Link>, <Link href="#">Nuxt</Link>, <Link href="#">Vite</Link>
        </p>
        <p>
          Maintaining <Link href="#">Sidu</Link>, <Link href="#">Twofish</Link>, <Link href="#">ESLint Stylistic</Link>
        </p>
        <p>
          Dreaming up ideas and making them come true is where my passion lies. You can find my full projects list here.
        </p>
      </div>
    </div>
  );
}