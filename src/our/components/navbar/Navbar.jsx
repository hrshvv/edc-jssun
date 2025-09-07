import React from "react";
import { Link } from "react-router-dom";
import AnimatedContent from "../../../../y/AnimatedContent/AnimatedContent";
import { ThemeToggle } from "../../../components/theme-toggle";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";
import DrawerTabs from "./DrawerTabs";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex justify-between items-center backdrop-blur-[4px] p-3 px-4 sm:p-4 sm:px-6 border rounded-xl bg-background/30">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Logo />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-2 xl:gap-4">
          <Link to="/">
            <Button variant="ghost" className="text-sm xl:text-base px-3 xl:px-4">
              Home
            </Button>
          </Link>
          <Link to="/team">
            <Button variant="ghost" className="text-sm xl:text-base px-3 xl:px-4">
              Team
            </Button>
          </Link>
          <Button variant="ghost" className="text-sm xl:text-base px-3 xl:px-4">
            Events
          </Button>
          <Button variant="ghost" className="text-sm xl:text-base px-3 xl:px-4">
            About
          </Button>
        </div>
        
        {/* Right Section - Theme Toggle, Mobile Menu, Connect Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          
          {/* Mobile Drawer */}
          <div className="lg:hidden">
            <DrawerTabs />
          </div>
          
          {/* Connect Button - Desktop Only */}
          <Button 
            size="sm" 
            className="hidden lg:inline-flex"
          >
            Connect
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
