import React from 'react';
import { Link } from './Link';

export function Profile() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
        <p className="text-gray-300 text-lg">
          Full-stack developer passionate about creating elegant solutions.
        </p>
      </div>
      
      <div className="space-y-6 text-gray-300">
        <div>
          <p className="mb-1">Working at <Link href="#" className="text-white">TechCorp Industries</Link></p>
          
          <p className="mb-1">
            Creator of <Link href="#" className="text-white">ProjectX</Link>, <Link href="#" className="text-white">DevTools Pro</Link>, <Link href="#" className="text-white">CloudStack</Link>
          </p>
          
          <p className="mb-1">
            Core team of <Link href="#" className="text-white">OpenSource Framework</Link>, <Link href="#" className="text-white">WebTools</Link>
          </p>
          
          <p>
            Maintaining <Link href="#" className="text-white">CodeBase</Link>, <Link href="#" className="text-white">DevUtils</Link>, <Link href="#" className="text-white">BuildTools</Link>
          </p>
        </div>

        <p>
          Dreaming up ideas and making them come true is where my passion lies. 
          You can find my <Link href="#" className="text-white">full projects list here</Link>.
          I also do some generative-art and interactivity experiments on <Link href="#" className="text-white">experiments.dev</Link>.
        </p>

        <p>
          I give <Link href="/talks" className="text-white">talks</Link> and write <Link href="/blog" className="text-white">blog posts</Link> about 
          open source, coding, and tutorials. Occasionally, I also do some coding live streams 
          on <Link href="#" className="text-white">YouTube</Link>.
        </p>

        <p>
          Outside of programming, I enjoy doing photography and traveling. Some of my photos can be 
          found on <Link href="#" className="text-white">Instagram</Link>. Currently based in San Francisco. If you are around, 
          feel free to reach out, we could have some coffee or work together.
        </p>

        <div className="mt-12 pt-4 border-t border-gray-800">
          <p className="mb-4 text-lg text-white">Find me on</p>
          <div className="space-y-2">
            <p>
              <Link href="#" className="text-white">GitHub</Link> • <Link href="#" className="text-white">Twitter</Link> • <Link href="#" className="text-white">LinkedIn</Link> • 
              <Link href="#" className="text-white">YouTube</Link> • <Link href="#" className="text-white">Instagram</Link>
            </p>
            <p>
              <Link href="#" className="text-white">Discord Server</Link> • <Link href="#" className="text-white">Dev.to</Link> • <Link href="#" className="text-white">Medium</Link>
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-800">
          <p>
            Or mail me at <Link href="mailto:contact@johndoe.dev" className="text-white">contact@johndoe.dev</Link>
          </p>
        </div>

        <div className="mt-12 pt-4 border-t border-gray-800">
          <p>
            If you enjoy my work and find it useful, consider sponsoring me to help keep 
            Open Source sustainable. Thank you!
          </p>
        </div>
      </div>
    </div>
  );
}