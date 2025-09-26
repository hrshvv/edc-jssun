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
    <div className="min-h-screen bg-black pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            EDC
          </span>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-300 mb-12">
          We are <FlipWords words={words} /> <br />
          <span className="text-lg text-gray-400 mt-4 block">
            Empowering the next generation of entrepreneurs
          </span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Mission Card */}
          <CardSpotlight className="h-80 w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 relative z-20">
                Our Mission
              </h2>
              <div className="relative z-20">
                <ul className="space-y-2 text-gray-300">
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
          <CardSpotlight className="h-80 w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 relative z-20">
                Our Vision
              </h2>
              <div className="relative z-20">
                <ul className="space-y-2 text-gray-300">
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
          <CardSpotlight className="h-80 w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 relative z-20">
                Key Activities
              </h2>
              <div className="relative z-20">
                <ul className="space-y-2 text-gray-300">
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
          <CardSpotlight className="h-80 w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-4 relative z-20">
                Our Values
              </h2>
              <div className="relative z-20">
                <ul className="space-y-2 text-gray-300">
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
