import React from 'react';
import { FlipWords } from '../../components/ui/flip-words';
import { CardSpotlight } from '@/components/ui/card-spotlight';
import Footer from '../components/Footer';

const About = () => {
  const words = [
    'Innovation',
    'Creativity',
    'Entrepreneurship',
    'Growth',
    'Success',
    'Future',
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section with Speaker/Audience Background */}
      <div className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://res.cloudinary.com/dh8cqlngr/image/upload/v1758992936/WhatsApp_Image_2025-09-27_at_20.01.31_04f0779d_jwq8kg.png")',
            backgroundSize: '100%',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute top-0 left-0 right-0 z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20 sm:pt-32 md:pt-40">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              EDC
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-2">
            Empowering visionaries to transform ideas into impactful ventures.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
          {/* Mission Card */}
          <CardSpotlight className="h-auto min-h-72 sm:min-h-80 w-full">
            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 relative z-20">
                Our Mission
              </h2>
              <div className="relative z-20">
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Foster entrepreneurial spirit among students</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Provide mentorship and resources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Transform innovative ideas into successful ventures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Bridge academic learning and real-world challenges
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Create opportunities for growth and development</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardSpotlight>

          {/* Vision Card */}
          <CardSpotlight className="h-auto min-h-72 sm:min-h-80 w-full">
            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 relative z-20">
                Our Vision
              </h2>
              <div className="relative z-20">
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Become the premier entrepreneurship hub</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Cultivate next generation business leaders</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Develop innovative thinkers and change-makers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Drive economic growth and social impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Create a sustainable entrepreneurial ecosystem</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardSpotlight>

          {/* Activities Card */}
          <CardSpotlight className="h-auto min-h-72 sm:min-h-80 w-full">
            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 relative z-20">
                Key Activities
              </h2>
              <div className="relative z-20">
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Startup incubation programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Mentorship workshops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Pitch competitions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Industry networking events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>Skill development sessions</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardSpotlight>

          {/* Values Card */}
          <CardSpotlight className="h-auto min-h-72 sm:min-h-80 w-full">
            <div className="p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 relative z-20">
                Our Values
              </h2>
              <div className="relative z-20">
                <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Innovation - Fostering creative thinking and breakthrough
                      solutions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Collaboration - Building strong networks and partnerships
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Excellence - Striving for the highest standards in
                      everything we do
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Integrity - Maintaining ethical standards and transparency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>
                      Growth - Continuous learning and personal development
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
