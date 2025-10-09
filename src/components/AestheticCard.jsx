import React from 'react';
import { cn } from '@/lib/utils';

const AestheticCard = ({ imageSrc, altText, className = '', onClick }) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-sm transition-all duration-700 cursor-pointer',
        'border-2 border-transparent hover:border-blue-400/50',
        className
      )}
      onClick={onClick}
    >
      {/* Boundary highlight effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/30 via-blue-500/40 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
        <div className="h-full w-full rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-4">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Corner highlight elements */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg" />
        </div>

        <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
          <div className="w-1.5 h-1.5 bg-blue-300 rounded-full shadow-md" />
        </div>

        <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-all duration-600">
          <div className="w-1 h-1 bg-blue-500 rounded-full" />
        </div>

        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-800">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-md" />
        </div>
      </div>
    </div>
  );
};

export default AestheticCard;
