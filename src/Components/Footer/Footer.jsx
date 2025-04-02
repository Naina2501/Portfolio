import React from "react";
import {Container} from "../index"
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className=" text-white p-4">
     <Container>
     <div className="container mx-auto px-4 flex flex-col items-center space-y-3">
        {/* Animated Social Icons */}
        <div>
              
            </div>

        <div className="flex space-x-8">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125"
          >
            <FaLinkedin
              size={32}
              className="animate-bounce hover:text-blue-500 transition-colors duration-200"
            />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125"
          >
            <FaGithub
              size={32}
              className="animate-pulse hover:text-gray-500 transition-colors duration-200"
            />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-125"
          >
            <FaTwitter
              size={32}
              className="animate-bounce hover:text-blue-400 transition-colors duration-200"
            />
          </a>
        </div>

        {/* Animated Fade-In Copyright */}
        <p className="text-sm  transition-opacity duration-1000 text-white">
          © {new Date().getFullYear()} Your Portfolio. All rights reserved.
        </p>
      </div>
     </Container>
    
    </footer>
  );
};

export default Footer;

