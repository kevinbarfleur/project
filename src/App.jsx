import React from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { SocialLinks } from './components/SocialLinks';
import { Talks } from './pages/Talks';
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
        {path === '/talks' && <Talks />}
      </main>
    </div>
  );
}

export default App;