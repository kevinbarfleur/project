import React from 'react';
import { FiGithub, FiTwitter, FiYoutube, FiMail } from 'react-icons/fi';

export function SocialLinks() {
  const links = [
    { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FiYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FiMail, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <div className="flex justify-center gap-6 mt-8">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}