import React from "react";
import { useTheme } from "../../../hooks/use-theme.jsx";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        // Light theme logo - responsive sizing
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1757095434/EDC_New_Logo_light_h2jczl.png"
          alt="EDC Logo"
          className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
        />
      ) : (
        // Dark theme logo - responsive sizing
        <img
          src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1757095428/EDC_New_Logo_darkbg_b8ptlv.png"
          alt="EDC Logo"
          className="h-8 w-auto sm:h-10 md:h-12 lg:h-14"
        />
      )}
    </>
  );
};

export default Logo;
