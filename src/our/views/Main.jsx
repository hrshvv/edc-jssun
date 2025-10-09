import React from 'react';
import { cn } from '@/lib/utils';
import { Spotlight } from '@/components/ui/spotlight';
import { FlipWords } from '@/components/ui/flip-words';
import Footer from '../components/Footer';
import TiltedCard from '@/components/TiltedCard';
import AestheticCard from '@/components/AestheticCard';

import {
  FaCode,
  FaPalette,
  FaCalendarAlt,
  FaBullhorn,
  FaFileAlt,
  FaNetworkWired,
  FaArrowRight,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaHandshake,
  FaGlobe,
  FaChevronDown,
  FaCrown,
  FaSearch,
  FaLink,
  FaLightbulb,
  FaChess,
  FaCogs,
} from 'react-icons/fa';
import { HiSparkles, HiLightBulb } from 'react-icons/hi';
import { MdDesignServices, MdEvent, MdCampaign } from 'react-icons/md';

const Main = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.querySelector('#timeline-section');
    if (timelineSection) {
      const offset = 50; // Scroll 50px above the timeline section
      const elementPosition = timelineSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      {/* Spotlight Section */}
      <div className="relative flex min-h-screen-mobile w-full overflow-hidden rounded-md bg-white dark:bg-black antialiased items-center justify-center px-2 sm:px-4">
        <div
          className={cn(
            'pointer-events-none absolute inset-0 [background-size:20px_20px] sm:[background-size:30px_30px] md:[background-size:40px_40px] select-none',
            'dark:[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]',
            '[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]'
          )}
        />

        <Spotlight
          className="-top-20 left-1/2 -translate-x-1/2 sm:-top-30 sm:left-1/2 sm:-translate-x-1/2 md:-top-20 md:left-1/2 md:-translate-x-1/2"
          fill="#05B1DE"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-2 sm:px-4 py-6 sm:py-8 md:py-12 lg:py-16">
          <div className="text-center">
            <div className="flex flex-row items-center justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
              <p className="text-gray-800 dark:text-neutral-400 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold">
                Build
              </p>
              <FlipWords
                words={[
                  'Startrups',
                  'Leaders',
                  'Communities',
                  'Networks',
                  'Inovations',
                ]}
                duration={3000}
                className="text-[#05B1DE] dark:text-[#05B1DE] text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold"
              />
            </div>
            <p className="text-gray-600 dark:text-neutral-400 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-normal px-4 max-w-4xl mx-auto">
              Shaping the future of innovation at JSS University through
              creativity, research, and transformative ideas that inspire
              progress.
            </p>
          </div>
        </div>

        <div className="swipe-down-button">
          <button
            onClick={scrollToTimeline}
            className="group flex flex-col items-center gap-1 sm:gap-2 p-3 sm:p-4 rounded-full bg-[#05B1DE]/20 hover:bg-[#05B1DE]/30 backdrop-blur-sm border-2 border-[#05B1DE]/40 hover:border-[#05B1DE]/60 transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Scroll to timeline section"
          >
            <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-[#05B1DE] group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <div
        id="timeline-section"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-black dark:bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              What{' '}
              <span className="text-[#05B1DE] dark:text-[#05B1DE]">We Do?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From exploration to launch, discover how we transform ideas into
              reality
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#05B1DE] via-blue-400 to-cyan-400 transform -translate-y-1/2 rounded-full hidden lg:block"></div>

            {/* Mobile Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#05B1DE] via-blue-400 to-cyan-400 rounded-full lg:hidden"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
              {/* We Explore */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaSearch className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-500 transition-colors duration-300">
                    We Explore
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Discover opportunities and market insights
                  </p>
                </div>
                {/* Connector for mobile */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-purple-500 to-blue-500 lg:hidden"></div>
              </div>

              {/* We Connect */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaNetworkWired className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors duration-300">
                    We Connect
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Build relationships and partnerships
                  </p>
                </div>
                {/* Connector for mobile */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-blue-500 to-green-500 lg:hidden"></div>
              </div>

              {/* We Create */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaLightbulb className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-500 transition-colors duration-300">
                    We Create
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Generate innovative solutions
                  </p>
                </div>
                {/* Connector for mobile */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-green-500 to-orange-500 lg:hidden"></div>
              </div>

              {/* We Strategize */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaChess className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    We Strategize
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Plan and optimize our approach
                  </p>
                </div>
                {/* Connector for mobile */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-orange-500 to-red-500 lg:hidden"></div>
              </div>

              {/* We Develop */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaCogs className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                    We Develop
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Build and refine our products
                  </p>
                </div>
                {/* Connector for mobile */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-red-500 to-cyan-500 lg:hidden"></div>
              </div>

              {/* We Launch */}
              <div className="relative flex flex-col items-center lg:items-center group">
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 mb-4">
                  <FaRocket className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                    We Launch
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                    Bring solutions to the market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="teams-section"
        className="pt-26 sm:pt-32 md:pt-34 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 bg-black dark:bg-black"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 sm:mb-4">
              Our{' '}
              <span className="text-[#05B1DE] dark: text-[#05B1DE]">
                Departments
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-4">
              Discover the diverse teams that drive innovation and excellence at
              EDC
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {/* Core Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-amber-50 dark:from-neutral-900 dark:to-amber-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-amber-500 dark:hover:border-amber-500 overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-400 rounded-t-3xl"></div>

              {/* Floating sparkles */}
              <div className="absolute top-6 right-6 text-amber-500/20 group-hover:text-amber-500/40 transition-all duration-300">
                <HiSparkles className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaCrown className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-amber-500 transition-colors duration-300">
                  Core Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Leading EDC's strategic vision, making key decisions, and
                  guiding the organization towards excellence in
                  entrepreneurship and innovation.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-amber-500/30 group-hover:text-amber-500 transition-colors duration-300">
                    <FaCrown className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-[#05B1DE] dark:hover:border-[#05B1DE] overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#05B1DE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#05B1DE] via-blue-500 to-cyan-400 rounded-t-3xl"></div>

              {/* Floating sparkles */}
              <div className="absolute top-6 right-6 text-[#05B1DE]/20 group-hover:text-[#05B1DE]/40 transition-all duration-300">
                <HiSparkles className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#05B1DE] to-blue-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaLaptopCode className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-[#05B1DE] transition-colors duration-300">
                  Technical Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Building cutting-edge solutions, developing websites, apps,
                  and managing technical infrastructure for all EDC initiatives.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-[#05B1DE]/30 group-hover:text-[#05B1DE] transition-colors duration-300">
                    <FaCode className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Design Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 dark:from-neutral-900 dark:to-purple-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 dark:hover:border-purple-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-purple-500/20 group-hover:text-purple-500/40 transition-all duration-300">
                <HiLightBulb className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdDesignServices className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-purple-500 transition-colors duration-300">
                  Design Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Creating stunning visual experiences, brand identity, and user
                  interfaces that bring our vision to life with creativity.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-purple-500/30 group-hover:text-purple-500 transition-colors duration-300">
                    <FaPalette className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Events & Training Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-orange-50 dark:from-neutral-900 dark:to-orange-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 dark:hover:border-orange-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-orange-500/20 group-hover:text-orange-500/40 transition-all duration-300">
                <FaRocket className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdEvent className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-orange-500 transition-colors duration-300">
                  Events & Training
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Organizing workshops, hackathons, and training sessions to
                  foster learning and community growth through engagement.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-orange-500/30 group-hover:text-orange-500 transition-colors duration-300">
                    <FaCalendarAlt className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-green-50 dark:from-neutral-900 dark:to-green-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-green-500 dark:hover:border-green-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-green-500/20 group-hover:text-green-500/40 transition-all duration-300">
                <HiSparkles className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdCampaign className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-green-500 transition-colors duration-300">
                  Marketing Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Promoting EDC initiatives, building brand awareness, and
                  connecting with the entrepreneurial community strategically.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-green-500/30 group-hover:text-green-500 transition-colors duration-300">
                    <FaBullhorn className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Documentation Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-[#05B1DE] rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-blue-500/20 group-hover:text-blue-500/40 transition-all duration-300">
                <HiLightBulb className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaFileAlt className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-blue-500 transition-colors duration-300">
                  Content & Docs
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Creating compelling content, maintaining documentation, and
                  ensuring clear communication across all platforms.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-blue-500/30 group-hover:text-blue-500 transition-colors duration-300">
                    <FaFileAlt className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Media & Networking Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-pink-50 dark:from-neutral-900 dark:to-pink-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-pink-500 dark:hover:border-pink-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-pink-500/20 group-hover:text-pink-500/40 transition-all duration-300">
                <FaUsers className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaNetworkWired className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-pink-500 transition-colors duration-300">
                  Media & Networking
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Building connections, managing social media presence, and
                  fostering relationships within the startup ecosystem.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-pink-500/30 group-hover:text-pink-500 transition-colors duration-300">
                    <FaNetworkWired className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Outreach Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-teal-50 dark:from-neutral-900 dark:to-teal-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500 dark:hover:border-teal-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-teal-500/20 group-hover:text-teal-500/40 transition-all duration-300">
                <FaGlobe className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaGlobe className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-teal-500 transition-colors duration-300">
                  Outreach Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Expanding EDC's reach, building partnerships with external
                  organizations, and connecting with the broader entrepreneurial
                  ecosystem.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-teal-500/30 group-hover:text-teal-500 transition-colors duration-300">
                    <FaGlobe className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>

            {/* Liaisoning Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-indigo-50 dark:from-neutral-900 dark:to-indigo-950/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 dark:hover:border-indigo-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-t-3xl"></div>

              <div className="absolute top-6 right-6 text-indigo-500/20 group-hover:text-indigo-500/40 transition-all duration-300">
                <FaHandshake className="w-7 h-7" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaHandshake className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 group-hover:text-indigo-500 transition-colors duration-300">
                  Liaisoning Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed text-sm sm:text-base">
                  Facilitating communication between teams, coordinating
                  internal processes, and ensuring smooth collaboration across
                  all departments.
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-indigo-500/30 group-hover:text-indigo-500 transition-colors duration-300">
                    <FaHandshake className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Events Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
              Our{' '}
              <span className="text-[#05B1DE] dark:text-[#05B1DE]">Events</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4">
              Join us for exciting workshops, competitions, and networking
              events designed to fuel your entrepreneurial journey
            </p>
          </div>

          {/* Events Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8 justify-items-center max-w-7xl mx-auto">
            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[280px]">
              <TiltedCard
                imageSrc="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/Recruitment_20250918_114625_0000_vaz5rz.png"
                altText="EDC Recruitment Drive 2025"
                captionText="EDC Recruitment Drive 2025"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[280px]">
              <TiltedCard
                imageSrc="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png"
                altText="Group Discussion"
                captionText="Group Discussion"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[280px]">
              <TiltedCard
                imageSrc="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg"
                altText="EDCxEureka"
                captionText="EDCxEureka"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>

            <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[300px] xl:max-w-[280px]">
              <TiltedCard
                imageSrc="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg"
                altText="Orientation Program 2025"
                captionText="Orientation Program 2025"
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={8}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Merchandise Section */}
      <div className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-black dark:bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 md:mb-6">
              Our{' '}
              <span className="text-[#05B1DE] dark:text-[#05B1DE]">
                Merchandise
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4">
              Show your EDC pride with our exclusive collection of branded
              merchandise and accessories
            </p>
          </div>

          {/* Merchandise Cards */}

          {/* Featured Merchandise Card */}
          <div className="mt-8 sm:mt-12 md:mt-16 max-w-md mx-auto">
            <AestheticCard
              imageSrc="https://res.cloudinary.com/dh8cqlngr/image/upload/v1760030304/Gemini_Generated_Image_kw3vtpkw3vtpkw3v_hv8vei.png"
              altText="Featured EDC Merchandise"
              className="w-full"
              onClick={() => console.log('Featured merchandise clicked')}
            />
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#05B1DE] text-white rounded-full hover:bg-[#05B1DE]/90 transition-colors duration-300 cursor-pointer">
              <span className="text-sm sm:text-base font-medium">Shop Now</span>
              <FaArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
