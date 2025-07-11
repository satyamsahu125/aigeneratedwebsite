import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Solutions', 'Services', 'Stats'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-wider text-white">
          K2V<span className="text-purple-400">.</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium gradient-underline"
          >
            Home
          </a>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium gradient-underline"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-block text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-5 py-2 rounded-full"
        >
          Contact
        </a>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white z-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-0 left-0 w-full h-screen bg-gray-900/95 backdrop-blur-xl transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
             <a href="#home" onClick={()=> setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white">Home</a>
             {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={()=> setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white">{link}</a>
             ))}
             <a href="#contact" onClick={()=> setMenuOpen(false)} className="text-2xl text-gray-300 hover:text-white">Contact</a>
        </div>
      </div>
    </header>
  );
};

export default Header;