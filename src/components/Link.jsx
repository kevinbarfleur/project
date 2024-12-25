import React from 'react';

export function Link({ href, className = '', children }) {
  return (
    <a 
      href={href}
      className={`text-gray-300 hover:text-white transition-colors ${className}`}
    >
      {children}
    </a>
  );
}