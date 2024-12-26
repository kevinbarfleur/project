import React from 'react';
import { Link } from '../components/Link';

export function Sponsors() {
  return (
    <div className="max-w-2xl mx-auto pt-20">
      <h1 className="text-4xl font-bold text-white mb-4">Sponsors</h1>
      <p className="text-gray-300 mb-8">
        Thank you for considering sponsoring my open source work. Your support helps keep these projects alive and growing.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Why Sponsor?</h2>
          <ul className="space-y-3 text-gray-300">
            <li>• Support the development of open source tools used by thousands</li>
            <li>• Enable more time for maintenance and new features</li>
            <li>• Help ensure long-term project sustainability</li>
            <li>• Get priority support and consulting time</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Sponsorship Tiers</h2>
          <div className="grid gap-6">
            <div className="p-6 rounded-lg bg-gray-800/50">
              <h3 className="text-xl font-semibold text-white mb-2">GitHub Sponsors</h3>
              <p className="text-gray-300 mb-4">
                Support through GitHub Sponsors with monthly contributions
              </p>
              <Link href="#" className="inline-block">
                Sponsor on GitHub →
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Current Sponsors</h2>
          <p className="text-gray-300">
            Special thanks to all my sponsors who make this work possible!
          </p>
        </div>
      </div>
    </div>
  );
} 