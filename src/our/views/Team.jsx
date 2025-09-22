import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import TeamCard from '../components/TeamCard';
import Footer from '../components/Footer';

const Team = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Team data with department information
  const teamData = [
    {
      name: 'Harsh Verma',
      role: 'Technical Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/1000010180_g496qx.jpg',
      department: 'Technical Team',
    },
    {
      name: 'Utkarsh Srivastava',
      role: 'Technical Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Utkarsh_Srivastava_ahasfc.jpg',
      department: 'Technical Team',
    },
    {
      name: 'Ujjwal Kaushik',
      role: 'Technical Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Ujjwal_Kaushik_qqlfwq.jpg',
      department: 'Technical Team',
    },
    {
      name: 'Panna Tyagi',
      role: 'Liaisoning Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/20250514_121810_wrahh6.jpg',
      department: 'Liaisoning Team',
    },
    {
      name: 'Aditya Agarwal',
      role: 'General Secretary',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Aditya_Agarwal_ezqijs.jpg',
      department: 'Core Team',
    },
    {
      name: 'Ananya Mishra',
      role: 'Media and Networking Team',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757106502/Ananya_Mishra__ptthev.png',
      department: 'Media and Networking Team',
    },
    {
      name: 'Anushka Srivastava',
      role: 'Events and Training Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Anushka_Srivastava_pdyof8.jpg',
      department: 'Events and Training Team',
    },
    {
      name: 'Daarim',
      role: 'Design Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105139/Daarim_wxbs4h.jpg',
      department: 'Design Team',
    },
    {
      name: 'Isha',
      role: 'Marketing Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_1323_gfjhut.jpg',
      department: 'Marketing Team',
    },
    {
      name: 'Shashank Sahu',
      role: 'Events and Training Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_20241215_200355_826_lqudce.webp',
      department: 'Events and Training Team',
    },
    {
      name: 'Kalyani Chaunwal',
      role: 'Content and Documentation Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Kalyani_m8spfn.jpg',
      department: 'Content and Documentation Team',
    },
    {
      name: 'Krish Bhardwaj',
      role: 'Events and Training Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Krish_Bhardwaj_jtkfsb.png',
      department: 'Events and Training Team',
    },
    {
      name: 'Lavanya Singh',
      role: 'Media and Networking Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Lavanya_Singh_xv5dih.jpg',
      department: 'Media and Networking Team',
    },
    {
      name: 'Luv Mangla',
      role: 'Marketing Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/LM_toe4zm.jpg',
      department: 'Marketing Team',
    },
    {
      name: 'Sameer Singla',
      role: 'Joint Secretary',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758553253/Sameer_singla_-min_tmbxss.jpg',
      department: 'Core Team',
    },
    {
      name: 'Krish Chaudhary',
      role: 'Design Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758477584/krish-ch_bjzl2n.jpg',
      department: 'Design Team',
    },
    {
      name: 'Sahal Parvez',
      role: 'Outreach Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758477686/parvez_zzfiz9.jpg',
      department: 'Outreach Team',
    },
    {
      name: 'Daksh Goyal',
      role: 'Liaisoning Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758477946/daksh-goyal_o3qfce.png',
      department: 'Liaisoning Team',
    },
    {
      name: 'Aaish Zaidi',
      role: 'Events and Training Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758478100/aaish-zaidi_wsi1to.jpg',
      department: 'Events and Training Team',
    },
    {
      name: 'Garvit Garg',
      role: 'Marketing Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1758478100/garvit-garg_hzyg7d.jpg',
      department: 'Marketing Team',
    },
    {
      name: 'Garvit Garg',
      role: 'Design Team Member',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1758552749/aryan-singh_katof2.jpg',
      department: 'Design Team',
    },
    {
      name: 'Kartikay Varshney',
      role: 'Design Team Head',
      image:
        'https://res.cloudinary.com/dh8cqlngr/image/upload/v1758553718/kartikay-varshney_lyarqq.jpg',
      department: 'Design Team',
    },
  ];

  // Filter team members based on active filter
  const filteredTeam =
    activeFilter === 'All'
      ? teamData
      : teamData.filter(member => member.department === activeFilter);

  return (
    <div className="space-y-4 pt-32">
      <div className="flex flex-wrap gap-2 px-2 justify-center">
        <Button
          variant={activeFilter === 'All' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'All'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('All')}
        >
          All
        </Button>
        <Button
          variant={activeFilter === 'Core Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Core Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Core Team')}
        >
          Core Team
        </Button>
        <Button
          variant={activeFilter === 'Technical Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Technical Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Technical Team')}
        >
          Technical Team
        </Button>
        <Button
          variant={activeFilter === 'Outreach Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Outreach Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Outreach Team')}
        >
          Outreach Team
        </Button>
        <Button
          variant={activeFilter === 'Design Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Design Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Design Team')}
        >
          Design Team
        </Button>
        <Button
          variant={
            activeFilter === 'Content and Documentation Team'
              ? 'default'
              : 'outline'
          }
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Content and Documentation Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Content and Documentation Team')}
        >
          Content & Docs
        </Button>
        <Button
          variant={activeFilter === 'Liaisoning Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Liaisoning Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Liaisoning Team')}
        >
          Liaisoning Team
        </Button>
        <Button
          variant={
            activeFilter === 'Events and Training Team' ? 'default' : 'outline'
          }
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Events and Training Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Events and Training Team')}
        >
          Events & Training
        </Button>
        <Button
          variant={activeFilter === 'Marketing Team' ? 'default' : 'outline'}
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Marketing Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Marketing Team')}
        >
          Marketing Team
        </Button>
        <Button
          variant={
            activeFilter === 'Media and Networking Team' ? 'default' : 'outline'
          }
          className={`text-xs px-2 py-1.5 h-auto min-h-[32px] flex items-center justify-center whitespace-nowrap transition-all duration-200 ${
            activeFilter === 'Media and Networking Team'
              ? 'bg-[#05B1DE] text-white hover:bg-[#05B1DE]/90'
              : 'hover:bg-[#05B1DE]/10'
          }`}
          onClick={() => setActiveFilter('Media and Networking Team')}
        >
          Media & Networking
        </Button>
      </div>
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto md:flex-wrap md:justify-center w-full px-2 sm:px-4 md:px-6 lg:px-8">
        {filteredTeam.map((member, index) => (
          <TeamCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Team;
