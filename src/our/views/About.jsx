import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
            About EDC
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            The Entrepreneurship Development Cell at JSS University is dedicated to fostering innovation, 
            creativity, and entrepreneurial spirit among students.
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-200">
                Our Mission
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                To create a thriving ecosystem that nurtures entrepreneurial thinking, 
                provides mentorship, and connects students with industry leaders. 
                We believe in empowering the next generation of innovators and change-makers.
              </p>
            </div>
            <div className="p-8 border rounded-lg bg-background/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4">What We Do</h3>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                <li>• Organize startup competitions and pitch events</li>
                <li>• Conduct workshops on entrepreneurship and innovation</li>
                <li>• Provide mentorship and guidance to budding entrepreneurs</li>
                <li>• Build networks between students and industry professionals</li>
                <li>• Support student-led startup initiatives</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#05B1DE] mb-2">500+</div>
              <div className="text-neutral-600 dark:text-neutral-400">Students Reached</div>
            </div>
            <div className="text-center p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#05B1DE] mb-2">50+</div>
              <div className="text-neutral-600 dark:text-neutral-400">Events Organized</div>
            </div>
            <div className="text-center p-6 border rounded-lg bg-background/50 backdrop-blur-sm">
              <div className="text-3xl font-bold text-[#05B1DE] mb-2">20+</div>
              <div className="text-neutral-600 dark:text-neutral-400">Startups Supported</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
