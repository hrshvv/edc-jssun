import React from 'react';
import Footer from '../components/Footer';
import PixelCard from '../../components/PixelCard';
import { InfiniteMovingCards } from '../../components/ui/infinite-moving-cards';

const Events = () => {
  // Event gallery images for each event
  const event1Gallery = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387732/IMG_5645_nibiiw.jpg',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387730/IMG_5637_k7kyxu.jpg',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387729/IMG_4329_ro2uaf.jpg',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387727/IMG_4289_zezr74.jpg',
    },
    {
      id: 5,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387727/IMG_4300_yxfszd.jpg',
    },
    {
      id: 6,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387725/IMG_4274_wpr56p.jpg',
    },
    {
      id: 7,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387724/IMG_4262_wxxelu.jpg',
    },
    {
      id: 8,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387723/IMG_4256_binzhe.jpg',
    },
    {
      id: 9,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387717/IMG_4202_1_fg0lam.jpg ',
    },
    {
      id: 10,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759387718/IMG_4207_xpgzyu.jpg',
    },
  ];

  const event2Gallery = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759396434/20250805_145633_etlf36.jpg',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759396434/20250805_143104_plm2v0.jpg',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759396434/20250805_142633_fkc2dh.jpg',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1758992936/WhatsApp_Image_2025-09-27_at_20.01.31_04f0779d_jwq8kg.png',
    },
  ];

  const event3Gallery = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png',
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg',
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg',
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png',
    },
  ];

  // Past events with detailed information
  const pastEvents = [
    {
      id: 1,
      title: 'EDCxEureka Startup Pitch Competition 2025',
      description:
        'Our annual flagship event where 15 innovative startups pitched their ideas to a panel of industry experts and investors. The competition featured cutting-edge solutions in fintech, healthtech, and sustainable technology.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg',
      date: '2023-12-15',
      location: 'AB-3 Room-113',
      attendees: '80+',
      winner: 'EcoTech Solutions',
      category: 'Competition',
      highlights: [
        '15 startups participated',
        '3 winners selected',
        '$50K in prizes awarded',
        '5 investment deals closed',
      ],
    },
    {
      id: 2,
      title: 'Orientation Programme 2025',
      description:
        'A comprehensive 3-day workshop series covering the fundamentals of AI and ML. Participants worked on real-world projects including image recognition, natural language processing, and predictive analytics.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg',
      date: '2023-11-20',
      location: 'Multipurpose Hall',
      attendees: '150+',
      winner: null,
      category: 'Workshop',
      highlights: [
        '3-day intensive program',
        'Hands-on projects',
        'Industry expert mentors',
        'Certificates awarded',
      ],
    },
    {
      id: 3,
      title: 'Group Discussion',
      description:
        'An exclusive networking event bringing together entrepreneurs, investors, and industry professionals. The evening featured keynote speakers, panel discussions, and structured networking sessions.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png',
      date: '2023-10-25',
      location: 'Online',
      attendees: 10,
      winner: null,
      category: 'Networking',
      highlights: [
        '95 professionals attended',
        '5 keynote speakers',
        '3 panel discussions',
        '20+ business connections made',
      ],
    },
  ];

  // Format date for display
  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10 text-center relative">
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

        {/* Pixel Cards with Center Image */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-12">
          <PixelCard variant="cyan">
            <img
              src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg"
              alt="Event Center Image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10"
            />
          </PixelCard>

          <PixelCard variant="cyan">
            <img
              src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg"
              alt="Event Center Image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10"
            />
          </PixelCard>
          <PixelCard variant="cyan">
            <img
              src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png"
              alt="Event Center Image"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-70 h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 z-10"
            />
          </PixelCard>
        </div>
      </div>

      {/* Hero to Past Events Barrier */}
      <div className="py-8 flex justify-center">
        <div className="relative group">
          {/* Main gradient line with glow effect */}
          <div className="w-300 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Center diamond with gradient */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>

          {/* Decorative dots */}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-x-8 w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 translate-x-8 w-1 h-1 bg-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

          {/* Subtle glow effect */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Past Events Showcase Section */}
      <div className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Past{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Events
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Relive the highlights from our most successful events and see the
              impact we've made together
            </p>
          </div>

          {/* Past Events Grid */}
          <div className="space-y-16">
            {pastEvents.map((event, index) => (
              <div key={event.id}>
                <div className="flex flex-col lg:flex-row gap-8 items-center">
                  {/* Event Image */}
                  <div className="flex-1 flex justify-center items-center">
                    <div
                      className="relative group overflow-hidden rounded-2xl shadow-2xl"
                      style={{
                        width: '400px',
                        height: '500px',
                      }}
                    >
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 text-white">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="max-w-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                          {event.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {formatDate(event.date)}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        {event.title}
                      </h3>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-blue-400">
                            {event.attendees}
                          </div>
                          <div className="text-sm text-gray-300">Attendees</div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-green-400">
                            {event.location.split(',')[0]}
                          </div>
                          <div className="text-sm text-gray-300">Location</div>
                        </div>
                      </div>

                      {/* Event Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-white mb-3">
                          Event Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center text-sm text-gray-300"
                            >
                              <svg
                                className="w-4 h-4 mr-2 text-green-500 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Winner Badge for Competition */}
                      {event.winner && (
                        <div className="mb-6">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg inline-flex items-center">
                            <svg
                              className="w-5 h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                              />
                            </svg>
                            Winner: {event.winner}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Infinite Moving Cards for this event */}
                <div className="mt-12 mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white">
                      Glimpse of the Event
                    </h3>
                  </div>
                  <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                      items={
                        index === 0
                          ? event1Gallery
                          : index === 1
                            ? event2Gallery
                            : event3Gallery
                      }
                      direction="right"
                      speed="slow"
                    />
                  </div>
                </div>

                {/* Event Barrier/Divider */}
                {index < pastEvents.length - 1 && (
                  <div className="mt-20 mb-12 flex justify-center">
                    <div className="relative group">
                      {/* Main gradient line with glow effect */}
                      <div className="w-300 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Center diamond with gradient */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 -translate-x-8 w-1 h-1 bg-blue-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 translate-x-8 w-1 h-1 bg-purple-400 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>

                      {/* Subtle glow effect */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Events;
