import React from 'react';
import { cn } from '@/lib/utils';

const AestheticCard = ({ imageSrc, altText, className = '', onClick }) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-sm cursor-pointer',
        'border-2 border-transparent hover:border-blue-400 hover:shadow-md hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-500',
        'w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-5xl',
        className
      )}
      onClick={onClick}
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200/5 via-transparent to-blue-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />

      {/* Content */}
      <div className="relative z-10">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
          <img
            src={imageSrc}
            alt={altText}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-120 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover:opacity-60 transition-all duration-700">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full shadow-sm" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 opacity-0 group-hover:opacity-40 transition-all duration-800">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-300 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default AestheticCard;
