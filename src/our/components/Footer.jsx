import React from "react";
import { Link } from "react-router-dom";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaCode,
  FaPalette,
  FaCalendarAlt,
  FaBullhorn,
  FaFileAlt,
  FaNetworkWired
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#05B1DE] mb-2">EDC JSS</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Building startups, leaders, communities, and innovations at JSS University. 
                Shaping the future of entrepreneurship and technology.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="social-link w-10 h-10 bg-neutral-700 hover:bg-[#05B1DE] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="social-link w-10 h-10 bg-neutral-700 hover:bg-[#05B1DE] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="social-link w-10 h-10 bg-neutral-700 hover:bg-[#05B1DE] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="social-link w-10 h-10 bg-neutral-700 hover:bg-[#05B1DE] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/team" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link 
                  to="/events" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Teams */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Our Teams</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaCode className="w-4 h-4 mr-2" />
                Technical Team
              </li>
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaPalette className="w-4 h-4 mr-2" />
                Design Team
              </li>
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaCalendarAlt className="w-4 h-4 mr-2" />
                Events & Training
              </li>
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaBullhorn className="w-4 h-4 mr-2" />
                Marketing Team
              </li>
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaFileAlt className="w-4 h-4 mr-2" />
                Content & Docs
              </li>
              <li className="flex items-center text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm">
                <FaNetworkWired className="w-4 h-4 mr-2" />
                Media & Networking
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#05B1DE] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-neutral-400 text-sm">
                    JSS Science and Technology University<br />
                    Mysuru, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-[#05B1DE] flex-shrink-0" />
                <a 
                  href="mailto:contact@edcjss.com" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  contact@edcjss.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-[#05B1DE] flex-shrink-0" />
                <a 
                  href="tel:+91-1234567890" 
                  className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
                >
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <FaRocket className="w-5 h-5 text-[#05B1DE]" />
              <p className="text-neutral-400 text-sm">
                © 2024 EDC JSS. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-neutral-400 hover:text-[#05B1DE] transition-colors duration-300 text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
