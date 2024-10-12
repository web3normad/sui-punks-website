import React, { useState, useEffect } from 'react';
import Logo from "../assets/images/logo.png";

const Header = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='bg-custom-radial text-white w-full overflow-x-hidden'>
    <header
      className={`fixed top-0 left-0 w-full bg-textColor bg-opacity-5 z-50 py-4 px-8 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg backdrop-filter backdrop-blur-lg" : ""
      }`}
    >
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex text-2xl font-bold">
          <a href="#home" className="hover:text-blue-400">
            <img src={Logo} alt="logo" className="w-16" />
          </a>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-custom">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-400">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about-us")} className="hover:text-blue-400">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("team")} className="hover:text-blue-400">
              Team
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("faq")} className="hover:text-blue-400">
              FAQ
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#232228] transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40`}
      >
        <button onClick={toggleSidebar} className="text-white absolute top-4 right-4">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="mt-20 space-y-6 text-center">
          <li>
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-400">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about-us")} className="hover:text-blue-400">
              About Us
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("team")} className="hover:text-blue-400">
              Team
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("faq")} className="hover:text-blue-400">
              FAQ
            </button>
          </li>
        </ul>
      </div>
    </header>
    </div>
  );
};

export default Header;
