import React from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Blog } from './pages/Blog';
import { Projects } from './pages/Projects';
import { Talks } from './pages/Talks';
import { Sponsors } from './pages/Sponsors';
import { DotGrid } from './components/DotGrid/DotGrid';

function App() {
  const path = window.location.pathname;

  return (
    <div className="relative min-h-screen bg-black text-white">
      <DotGrid />
      <Header />
      <main className="pt-32 px-6 pb-16">
        {path === '/' && (
          <>
            <Profile />
            <SocialLinks />
          </>
        )}
        {path === '/blog' && <Blog />}
        {path === '/projects' && <Projects />}
        {path === '/talks' && <Talks />}
        {path === '/sponsors' && <Sponsors />}
      </main>
    </div>
  );
}

export default App;