import React from "react";
import { Button } from "@/components/ui/button";
import TeamCard from "../components/TeamCard";

const Team = () => {
  return (
    <div className="space-y-4 pt-32">
      <div className="flex gap-2 overflow-x-auto px-2">
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Core Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Technical Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Outreach Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Design Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Content and Documentation Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Liasioning Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Events and Training Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Marketing Team
        </Button>
        <Button
          variant="outline"
          className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 whitespace-nowrap flex-shrink-0"
        >
          Media and Networking Team
        </Button>
      </div>
      <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 overflow-x-auto md:flex-wrap md:justify-center w-full px-2 sm:px-4 md:px-6 lg:px-8">
        <TeamCard
          name="Harsh Verma"
          role="Technical Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/1000010180_g496qx.jpg"
        />
        <TeamCard
          name="Utkarsh Srivastava"
          role="Technical Team Head"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Utkarsh_Srivastava_ahasfc.jpg"
        />
        <TeamCard
          name="Ujjwal Kaushik"
          role="Technical Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Ujjwal_Kaushik_qqlfwq.jpg"
        />
        <TeamCard
          name="Panna Tyagi"
          role="Liasioning Team Head"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/20250514_121810_wrahh6.jpg"
        />
        <TeamCard
          name="Aditya Agarwal"
          role="General Secretary"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Aditya_Agarwal_ezqijs.jpg"
        />
        <TeamCard
          name="Ananya Mishra"
          role="Media and Networking Team "
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757106502/Ananya_Mishra__ptthev.png"
        />
        <TeamCard
          name="Anushka Srivastava"
          role="Events and Training Team Head"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105138/Anushka_Srivastava_pdyof8.jpg"
        />
        <TeamCard
          name="Daarim"
          role="Design Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105139/Daarim_wxbs4h.jpg"
        />
        <TeamCard
          name="Isha"
          role="Marketing Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_1323_gfjhut.jpg"
        />
        <TeamCard
          name="Shashank Sahu"
          role="Events and Training Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/IMG_20241215_200355_826_lqudce.webp"
        />
        <TeamCard
          name="Kalyani Chaunwal"
          role="Content and Documentation Team Head"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Kalyani_m8spfn.jpg"
        />
        <TeamCard
          name="Krish Bhardwaj"
          role="Events and Training Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105140/Krish_Bhardwaj_jtkfsb.png"
        />
        <TeamCard
          name="Lavanya Singh"
          role="Media and Networking Team Member"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/Lavanya_Singh_xv5dih.jpg"
        />
        <TeamCard
          name="Luv Mangla"
          role="Marketing Team Head"
          image="https://res.cloudinary.com/dh8cqlngr/image/upload/ar_4:5,c_fill,g_face/v1757105141/LM_toe4zm.jpg"
        />
      </div>
    </div>
  );
};

export default Team;
