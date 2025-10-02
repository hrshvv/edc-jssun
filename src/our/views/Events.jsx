import React from 'react';
import Footer from '../components/Footer';
import PixelCard from '../../components/PixelCard';

const Events = () => {
  // Past events with detailed information
  const pastEvents = [
    {
      id: 1,
      title: 'Startup Pitch Competition 2023',
      description:
        'Our annual flagship event where 15 innovative startups pitched their ideas to a panel of industry experts and investors. The competition featured cutting-edge solutions in fintech, healthtech, and sustainable technology.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg',
      date: '2023-12-15',
      location: 'Innovation Hub, Main Campus',
      attendees: 180,
      winner: 'EcoTech Solutions',
      category: 'Competition',
      highlights: [
        '15 startups participated',
        '3 winners selected',
        '$50K in prizes awarded',
        '5 investment deals closed',
      ],
      gallery: [],
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop Series',
      description:
        'A comprehensive 3-day workshop series covering the fundamentals of AI and ML. Participants worked on real-world projects including image recognition, natural language processing, and predictive analytics.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg',
      date: '2023-11-20',
      location: 'Computer Lab 3',
      attendees: 45,
      winner: null,
      category: 'Workshop',
      highlights: [
        '3-day intensive program',
        'Hands-on projects',
        'Industry expert mentors',
        'Certificates awarded',
      ],
      gallery: [],
    },
    {
      id: 3,
      title: 'Entrepreneur Networking Mixer',
      description:
        'An exclusive networking event bringing together entrepreneurs, investors, and industry professionals. The evening featured keynote speakers, panel discussions, and structured networking sessions.',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png',
      date: '2023-10-25',
      location: 'Downtown Business Center',
      attendees: 95,
      winner: null,
      category: 'Networking',
      highlights: [
        '95 professionals attended',
        '5 keynote speakers',
        '3 panel discussions',
        '20+ business connections made',
      ],
      gallery: [
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center',
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
            <div className="absolute top-4 left-4 text-white font-semibold text-sm">
              <img
                src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080883/WhatsApp_Image_2025-09-28_at_22.00.24_4f14c6fe_sazknc.jpg"
                alt="Event Center Image"
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </PixelCard>

          <PixelCard variant="cyan">
            <div className="absolute top-4 left-4 text-white font-semibold text-sm">
              <img
                src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080882/WhatsApp_Image_2025-09-28_at_22.01.37_a5399f7c_w0jn1f.jpg"
                alt="Event Center Image"
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </PixelCard>
          <PixelCard variant="cyan">
            <div className="absolute top-4 left-4 text-white font-semibold text-sm">
              <img
                src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1759080881/EDC_JSS_UNI_nviwol.png"
                alt="Event Center Image"
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </PixelCard>
        </div>
      </div>

      {/* Hero to Past Events Barrier */}
      <div className="py-8 flex justify-center">
        <div className="relative group">
          {/* Main gradient line with glow effect */}
          <div className="w-80 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                        width: event.id === 1 ? '450px' : '400px',
                        height: event.id === 1 ? '550px' : '450px',
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

                      {/* Photo Gallery */}
                      <div>
                        <h4 className="font-semibold text-white mb-3">
                          Event Photos
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {event.gallery.map((photo, idx) => (
                            <div
                              key={idx}
                              className="relative group cursor-pointer"
                            >
                              <img
                                src={photo}
                                alt={`${event.title} photo ${idx + 1}`}
                                className="w-full h-20 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 rounded-lg flex items-center justify-center">
                                <svg
                                  className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                  />
                                </svg>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
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
