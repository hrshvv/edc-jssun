import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Footer from "../components/Footer";
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
} from "react-icons/fa";
import { HiSparkles, HiLightBulb } from "react-icons/hi";
import { MdDesignServices, MdEvent, MdCampaign } from "react-icons/md";

const Main = () => {
  const scrollToTeams = () => {
    const teamsSection = document.querySelector('#teams-section');
    if (teamsSection) {
      const offset = 50; // Scroll 100px above the teams section
      const elementPosition = teamsSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <BackgroundBeamsWithCollision className="h-[100svh] md:h-[100svh] bg-transparent relative">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold w-fit mx-auto h-[100svh] flex flex-col justify-center">
          <div className="p-4">
            <div className="flex items-center gap-1 ">
              <p className="text-neutral-600 dark:text-neutral-400">Build</p>
              <FlipWords
                words={[
                  "Startrups",
                  "Leaders",
                  "Communities",
                  "Networks",
                  "Inovations",
                ]}
                duration={3000}
                className="text-[#05B1DE] dark:text-[#05B1DE]"
              />
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal">
              Shaping the future of Innovation at JSS University.
            </p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <button 
              onClick={scrollToTeams}
              className="group flex flex-col items-center gap-2 p-3 rounded-full bg-[#05B1DE]/10 hover:bg-[#05B1DE]/20 backdrop-blur-sm border border-[#05B1DE]/20 hover:border-[#05B1DE]/40 transition-all duration-300 hover:scale-110"
              aria-label="Scroll to teams section"
            >
              {/* <span className="text-[#05B1DE] text-sm font-medium group-hover:text-[#05B1DE]/80 transition-colors duration-300">
                Explore Teams
              </span> */}
              <FaChevronDown className="w-4 h-4 text-[#05B1DE] group-hover:translate-y-1 transition-transform duration-300 animate-bounce" />
            </button>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
      <div id="teams-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Our Teams
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover the diverse teams that drive innovation and excellence at
              EDC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-[#05B1DE] dark:hover:border-[#05B1DE] overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#05B1DE]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#05B1DE] via-blue-500 to-cyan-400 rounded-t-3xl"></div>

              {/* Floating sparkles */}
              <div className="absolute top-4 right-4 text-[#05B1DE]/20 group-hover:text-[#05B1DE]/40 transition-all duration-300">
                <HiSparkles className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#05B1DE] to-blue-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaLaptopCode className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-[#05B1DE] transition-colors duration-300">
                  Technical Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Building cutting-edge solutions, developing websites, apps,
                  and managing technical infrastructure for all EDC initiatives.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-[#05B1DE] font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-[#05B1DE]/30 group-hover:text-[#05B1DE] transition-colors duration-300">
                    <FaCode className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Design Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-purple-50 dark:from-neutral-900 dark:to-purple-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500 dark:hover:border-purple-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-purple-500/20 group-hover:text-purple-500/40 transition-all duration-300">
                <HiLightBulb className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdDesignServices className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-purple-500 transition-colors duration-300">
                  Design Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Creating stunning visual experiences, brand identity, and user
                  interfaces that bring our vision to life with creativity.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-purple-500/30 group-hover:text-purple-500 transition-colors duration-300">
                    <FaPalette className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Events & Training Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-orange-50 dark:from-neutral-900 dark:to-orange-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-orange-500 dark:hover:border-orange-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-orange-500/20 group-hover:text-orange-500/40 transition-all duration-300">
                <FaRocket className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdEvent className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  Events & Training
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Organizing workshops, hackathons, and training sessions to
                  foster learning and community growth through engagement.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-orange-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-orange-500/30 group-hover:text-orange-500 transition-colors duration-300">
                    <FaCalendarAlt className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-green-50 dark:from-neutral-900 dark:to-green-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-green-500 dark:hover:border-green-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-green-500/20 group-hover:text-green-500/40 transition-all duration-300">
                <HiSparkles className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <MdCampaign className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-green-500 transition-colors duration-300">
                  Marketing Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Promoting EDC initiatives, building brand awareness, and
                  connecting with the entrepreneurial community strategically.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-green-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-green-500/30 group-hover:text-green-500 transition-colors duration-300">
                    <FaBullhorn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content & Documentation Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50 dark:from-neutral-900 dark:to-blue-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 dark:hover:border-blue-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-blue-500/20 group-hover:text-blue-500/40 transition-all duration-300">
                <HiLightBulb className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaFileAlt className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-blue-500 transition-colors duration-300">
                  Content & Docs
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Creating compelling content, maintaining documentation, and
                  ensuring clear communication across all platforms.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-blue-500/30 group-hover:text-blue-500 transition-colors duration-300">
                    <FaFileAlt className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Media & Networking Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-pink-50 dark:from-neutral-900 dark:to-pink-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-pink-500 dark:hover:border-pink-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-pink-500/20 group-hover:text-pink-500/40 transition-all duration-300">
                <FaUsers className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaNetworkWired className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-pink-500 transition-colors duration-300">
                  Media & Networking
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Building connections, managing social media presence, and
                  fostering relationships within the startup ecosystem.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-pink-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-pink-500/30 group-hover:text-pink-500 transition-colors duration-300">
                    <FaNetworkWired className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Outreach Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-teal-50 dark:from-neutral-900 dark:to-teal-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500 dark:hover:border-teal-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-teal-500/20 group-hover:text-teal-500/40 transition-all duration-300">
                <FaGlobe className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaGlobe className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-teal-500 transition-colors duration-300">
                  Outreach Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Expanding EDC's reach, building partnerships with external
                  organizations, and connecting with the broader entrepreneurial
                  ecosystem.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-teal-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-teal-500/30 group-hover:text-teal-500 transition-colors duration-300">
                    <FaGlobe className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Liaisoning Team Card */}
            <div className="group relative bg-gradient-to-br from-white to-indigo-50 dark:from-neutral-900 dark:to-indigo-950/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-200 dark:border-neutral-800 hover:border-indigo-500 dark:hover:border-indigo-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-t-3xl"></div>

              <div className="absolute top-4 right-4 text-indigo-500/20 group-hover:text-indigo-500/40 transition-all duration-300">
                <FaHandshake className="w-6 h-6" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <FaHandshake className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 group-hover:text-indigo-500 transition-colors duration-300">
                  Liaisoning Team
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed text-sm">
                  Facilitating communication between teams, coordinating
                  internal processes, and ensuring smooth collaboration across
                  all departments.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-indigo-500 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span className="text-sm">Explore Team</span>
                    <FaArrowRight className="w-4 h-4 ml-2 group-hover:ml-3 transition-all duration-300" />
                  </div>
                  <div className="text-indigo-500/30 group-hover:text-indigo-500 transition-colors duration-300">
                    <FaHandshake className="w-5 h-5" />
                  </div>
                </div>
              </div>
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
