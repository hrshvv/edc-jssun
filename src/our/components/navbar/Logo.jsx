import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex-shrink-0">
      <img
        src="https://res.cloudinary.com/dh8cqlngr/image/upload/v1757095428/EDC_New_Logo_darkbg_b8ptlv.png"
        alt="EDC Logo"
        className="h-8 w-auto sm:h-10 cursor-pointer hover:opacity-80 transition-opacity duration-200"
      />
    </Link>
  );
};

export default Logo;
