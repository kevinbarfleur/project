import React from 'react';
import { FiDownload, FiPlay, FiSliders } from 'react-icons/fi';

const talks = [
  {
    title: "ESLint One for All Made Easy",
    description: "Introduction to ESLint's new flat config format and see how it can bring new possibilities and enhancements to your development workflow and experience.",
    events: [
      {
        name: "WebConf Taiwan",
        date: "Dec 27",
        location: "Taipei, Taiwan",
        upcoming: true,
        slides: true,
        pdf: true
      },
      {
        name: "FEDAY",
        date: "Dec 7",
        location: "Xiamen, China",
        slides: true,
        pdf: true
      }
    ]
  },
  {
    title: "Journey to Nuxt Icon",
    description: "Introductions of various Icon solutions with their Pros and Cons. And how we take the lessons we learned and make the refreshed Nuxt Icon v1.0",
    events: [
      {
        name: "Nuxt Nation",
        date: "Nov 12",
        location: "Online",
        slides: true,
        pdf: true
      }
    ]
  },
  {
    series: "Anthony's Road to Open Source - Part 3",
    title: "Yak Shaving",
    description: "The art of yak shaving and how it can help you to build better open source projects.",
    events: [
      {
        name: "Vue Fes Japan",
        date: "Oct 19",
        location: "Tokyo, Japan",
        slides: true,
        pdf: true
      },
      {
        name: "VueConf Shenzhen",
        date: "Jul 8",
        location: "Shenzhen, China",
        watch: true,
        slides: true,
        pdf: true
      }
    ]
  }
];

function TalkEvent({ event }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <div>
        <span className="text-gray-300">{event.name}</span>
        {event.upcoming && (
          <span className="ml-2 text-xs bg-gray-800 text-gray-400 px-2 py-0.5 rounded">
            In 2 days
          </span>
        )}
        <div className="text-gray-500">
          {event.date} · {event.location}
        </div>
      </div>
      <div className="flex gap-3">
        {event.watch && (
          <button className="text-gray-400 hover:text-white">
            <FiPlay className="w-5 h-5" />
          </button>
        )}
        {event.slides && (
          <button className="text-gray-400 hover:text-white">
            <FiSliders className="w-5 h-5" />
          </button>
        )}
        {event.pdf && (
          <button className="text-gray-400 hover:text-white">
            <FiDownload className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

function Talk({ talk }) {
  return (
    <div className="mb-12">
      {talk.series && (
        <div className="text-sm text-gray-500 mb-1">{talk.series}</div>
      )}
      <h2 className="text-xl font-semibold text-white mb-2">{talk.title}</h2>
      <p className="text-gray-400 mb-4">{talk.description}</p>
      <div className="space-y-1">
        {talk.events.map((event, index) => (
          <TalkEvent key={index} event={event} />
        ))}
      </div>
    </div>
  );
}

export function Talks() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Latest Talks</h1>
      <div className="space-y-8">
        {talks.map((talk, index) => (
          <Talk key={index} talk={talk} />
        ))}
      </div>
    </div>
  );
}