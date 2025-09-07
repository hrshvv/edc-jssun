import React from "react";

const Events = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
            Events
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Discover our upcoming events, workshops, and initiatives that shape the entrepreneurial landscape at JSS University.
          </p>
        </div>
        
        {/* Placeholder content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Startup Pitch Competition</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Present your innovative ideas to industry experts and win exciting prizes.
            </p>
            <div className="text-sm text-neutral-500">Coming Soon</div>
          </div>
          
          <div className="p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Tech Workshop Series</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Learn the latest technologies and tools from industry professionals.
            </p>
            <div className="text-sm text-neutral-500">Coming Soon</div>
          </div>
          
          <div className="p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-2">Networking Meetup</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-4">
              Connect with like-minded entrepreneurs and build valuable relationships.
            </p>
            <div className="text-sm text-neutral-500">Coming Soon</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
