import React from 'react';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Footer from '../components/Footer';

const Events = () => {
  const eventCards = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 5,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 6,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 7,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 8,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 9,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
    {
      id: 10,
      image:
        'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=500&fit=crop&crop=center',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
          Our{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Events
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
          Join us for exciting workshops, competitions, and networking events
          designed to fuel your entrepreneurial journey
        </p>
      </div>

      {/* Event Gallery Section */}
      <div className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              Gallery
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Take a look at our past events and the amazing community we've built
            together
          </p>
        </div>
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={eventCards}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
