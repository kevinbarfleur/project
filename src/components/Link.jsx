import React from 'react';

export function Link({ href, className = '', children }) {
  return (
    <a 
      href={href}
      className={`text-white hover:text-white/80 transition-colors ${className}`}
    >
      {children}
    </a>
  );
}