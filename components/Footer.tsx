import React from 'react';
import { InstagramIcon } from './icons/InstagramIcon';
import { PinterestIcon } from './icons/PinterestIcon';

const Footer: React.FC = () => {
  const navLinks = ['Solutions', 'Services', 'Stats'];

  return (
    <footer id="contact" className="relative footer-bg overflow-hidden pt-20 pb-10 text-gray-400 animated-gradient-bg">
      <div className="container mx-auto px-6 text-center relative z-10">
        <a href="#home" className="text-3xl font-bold tracking-wider text-white">
          K2V Designs
        </a>
        <nav className="my-8 flex justify-center flex-wrap gap-x-8 gap-y-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 font-medium">Contact</a>
        </nav>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <InstagramIcon className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <PinterestIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          © Copyright {new Date().getFullYear()}. All Rights Reserved by K2V Designs.
        </p>
      </div>
    </footer>
  );
};

export default Footer;